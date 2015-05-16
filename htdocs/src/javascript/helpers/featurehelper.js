App.Helpers.featureHelper = function (feature, $root) {

  var _uid = feature._uid = _.uniqueId();
  var eventNamespace = '.feature' + _uid;

  var events = feature.events = _.assign({}, feature.events);

  feature.$root = $root;
  feature.noop = _.noop;

  feature.attach = function (eventObj) {
    _.forEach(eventObj, attachEvent.bind(this));
    _.assign(events, eventObj);
    return this;
  };

  feature.attachAll = function () {
    feature.attach(events);
    return this;
  };

  feature.detach = function (eventObj) {
    if (_.isString(eventObj)) {
      detachEvent.bind(this)('noop', eventObj);
    }
    _.forEach(eventObj, detachEvent.bind(this));
    return this;
  };

  feature.detachAll = function () {
    feature.detach(events);
    return this;
  };

  feature.cacheElements = function () {
    assignDefaultCache();
    if (feature.__cache__) {
      feature.cache = feature.__cache__;
    } else {
      feature.__cache__ = _.clone(feature.cache);
    }
    _.forEach(feature.cache, function (value, key) {
      if (key === '$window' || key === '$document') {
        feature.cache[key] = $(value);
        return;
      } else if (key === '$root') {
        feature.cache[key] = $root;
        return;
      }

      feature.cache[key] = $root.find(value);
    });
    return feature;
  };

  feature.emit = function (event, data) {
    $root.trigger(event, data);
    return this;
  };

  feature.start = function () {
    return feature
      .cacheElements()
      .reset()
    ;
  };

  feature.reset = function () {
    return feature
      .detachAll()
      .attachAll()
    ;
  };

  function attachEvent (callbackName, eventString) {
    if (events.hasOwnProperty(eventString)) {
      this.detach('noop', eventString);
    }
    var blueprint = buildEventBlueprint(callbackName, eventString);
    var namespacedEvent = blueprint.event + eventNamespace;
    var eventFn = 'on';
    if (blueprint.override && _.isFunction($root[blueprint.override])) {
      eventFn = blueprint.override;
    }

    if (blueprint.target) {
      $root[eventFn](namespacedEvent, blueprint.target, blueprint.callback);
      return;
    }
    $root[eventFn](namespacedEvent, blueprint.callback);
  }

  function detachEvent (callbackName, eventString) {
    if (!events.hasOwnProperty(eventString)) {return this;}
    var blueprint = buildEventBlueprint(callbackName, eventString);
    var namespacedEvent = blueprint.event + eventNamespace;
    if (blueprint.target) {
      $root.off(namespacedEvent, blueprint.target);
      return this;
    }

    $root.off(namespacedEvent);
    return this;
  }

  function buildEventBlueprint (callbackName, eventString) {
    var eventObj = parseEventString(eventString);
    var parsedCallback = parseConditional(callbackName);
    var callback = _.isObject(parsedCallback) ?
      createConditionalCallback(parsedCallback):
      feature[callbackName]
    ;

    if (!_.isFunction(callback)) {
      throw new TypeError(callbackName + ' is not a function.');
    }

    return {
      target: feature.__cache__[eventObj.target] || eventObj.target,
      event: eventObj.event,
      override: eventObj.override,
      callback: callback
    };
  }

  function assignDefaultCache () {
    _.assign(feature.cache, {
      $root: $root
    });
  }

  function parseEventString (str) {
    var EVENT_EXP = /((\w+)\s*?::\s*?)?(\w+)\s*?@\s*?([\S\s]+)/;
    var split = str.split(EVENT_EXP);
    if (split.length <= 1) {}
    return {
      override: $.trim(split[2]),
      event: $.trim(split[3] || split[0]),
      target: $.trim(split[4])
    };
  }

  function parseConditional (str) {
    var CONDITIONAL_EXP = /(\w+)\s*?\|\s*?(if|unless)\((.+?)\)/;
    var split = str.split(CONDITIONAL_EXP);
    if (split.length <= 1) {return $.trim(str);}
    return {
      operator: $.trim(split[2]),
      condition: $.trim(split[3]),
      callback: feature[$.trim(split[1])]
    };
  }

  function createConditionalCallback (parsedCallback) {
    var negate = parsedCallback.operator === 'unless';
    return function () {
      var featureConditional = feature[parsedCallback.condition];
      var result = _.isFunction(featureConditional)?
        featureConditional.apply(feature):
        featureConditional;
      if ((negate && result) || (!negate && !result)) {return;}
      return parsedCallback.callback.apply(feature, arguments);
    };
  }

  return feature;
};
