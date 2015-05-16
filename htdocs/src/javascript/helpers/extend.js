App.Helpers.extend = function (protoProperties, staticProperties) {
  var ParentClass = this;
  var ChildClass;

  if (!_.isFunction(ParentClass)) {return;}

  if (protoProperties && _.has(protoProperties, 'constructor')) {
    ChildClass = protoProperties.constructor;
  } else {
    ChildClass = function () { return ParentClass.apply(this, arguments); };
  }

  _.assign(ChildClass, ParentClass, staticProperties);

  // Allow ChildClass to inherit from ParentClass without calling the ParentClass constructor
  function Surrogate () {
    this.constructor = ChildClass;
  }

  Surrogate.prototype = ParentClass.prototype;
  ChildClass.prototype = new Surrogate();

  if (protoProperties) {
    _.assign(ChildClass.prototype, protoProperties);
  }

  // jic
  ChildClass.__super__ = ParentClass.prototype;

  return ChildClass;
};
