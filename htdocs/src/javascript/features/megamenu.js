App.Features.megaMenu = (function (exports) {

  var els = exports.cache = {
    $categoryContent: '.category-content'
  };

  exports.events = {
    'mouseenter@.mega-menu__category--expandable': 'onCategoryEnter | unless(isMobile)',
    'mouseleave@.mega-menu__category--expandable': 'onCategoryLeave | unless(isMobile)',
    'resize:tablet': 'reset',
    'resize': 'removeHeightFlags'
  };

  exports.init = function ($root) {
    App.Helpers.featureHelper(this, $root).start();
    this.isMobile = App.Devices.isMobileLayout;
  };

  exports.onCategoryEnter = function (e) {
    els.$activeContent = $(e.currentTarget).find(content);
    els.$activeContent.removeClass(hidden);
    setMaxHeight(els.$activeContent);
    $body.addClass(noScroll);
  };

  exports.onCategoryLeave = function () {
    els.$activeContent.addClass(hidden);
    $body.removeClass(noScroll);
  };

  exports.removeHeightFlags = function () {
    els.$categoryContent
      .data(heightIsSetFlag, false)
      .css('max-height', '')
    ;
  };

  App.Helpers.resizeHelper(exports);

  var content = '.category-content';
  var hidden = 'hidden';
  var heightIsSetFlag = 'height-set';
  var noScroll = 'no-scroll';
  var $window = $(window);
  var $body = $('body');

  function setMaxHeight (el) {
    var $el = $(el);
    var $header = $('.widget.header');
    if ($el.data(heightIsSetFlag) === true) {return;}
    var headerHeight = $header.height();
    var windowHeight = $window.height();
    var usableVerticalHeight = windowHeight - headerHeight;
    
    $el.data(heightIsSetFlag, true);
    $el
      .css('height', usableVerticalHeight + 'px')
      .data(heightIsSetFlag, true);
  }

  return exports;

}(App.Features.megaMenu || {}));
