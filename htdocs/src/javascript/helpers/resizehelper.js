/**
 * Emits resize events on the root element of the feature passed in
 * @param  {Object} feature The feature object where events will be emitted
 * @return {Object}     The same feature passed in as an argument
 */
App.Helpers.resizeHelper = function (feature) {
  function onResize () {
    if (!_.isFunction(feature.emit)) {return;}
    feature.emit('resize');
    if (App.Devices.isMobileLayout()) {
      return feature.emit('resize:mobile');
    }
    feature.emit('resize:tablet');
  }

  //$.subscribe('resize', onResize);
  return feature;
};
