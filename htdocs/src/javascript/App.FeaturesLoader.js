App.Features = {
  init: function() {
    var features = $('[data-features]'),
      featuresArray = [],
      $this = this;

    function camelize (str) {
      var alphaMatcher = /([A-Za-z]+)/g;
      var wordChunks = str.match(alphaMatcher);
      var camelizeArray = function(word, index) {
        if (index < 1) {return word;}
        return word.charAt(0).toUpperCase() + word.substr(1);
      };
      var camelizedArray = _.map(wordChunks, camelizeArray);
      return camelizedArray.join('');
    }

    if (!features.length) {return false;}
    _.forEach(features, function (feature) {
      var $element = $(feature),
        func = $element.data('features');
      featuresArray = func.split(' ');
      _.forEach(featuresArray, function(func) {
        var fn = $this[func] || $this[camelize(func)];
        if (!fn || !_.isFunction(fn.init)) {return;}
        fn.init($element);
      });
    });
  }
};
