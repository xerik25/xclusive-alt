App.Features.tabs = (function (exports) {

  var els = {};
  var hidden = 'hidden';

  function setEls ($root) {
    els.$tabLinks = $root.find('.tabs__link');
    els.$ektronParent = $root.parents('li');
    els.$ektronWidgets = getAssociatedWidgets();

    els.$ektronWidgets.filter(":not(:eq(0))").addClass(hidden);
  }

  function bindEvents () {
    els.$tabLinks.on('click', onTabClick);
  }

  function onTabClick (e) {
    e.preventDefault();
    var index = els.$tabLinks.index(e.currentTarget);
    els.$ektronWidgets.addClass(hidden);
    els.$ektronWidgets.eq(index).removeClass(hidden);
  }

  function getAssociatedWidgets () {
    return els.$ektronParent
      .nextAll('li')
      .slice(0, els.$tabLinks.length)
    ;
  }

  exports.init = function ($root) {
    setEls($root);
    bindEvents();
  };

  return exports;

}(App.Features.tabs || {}));
