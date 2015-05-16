App.Features.mobileMenu = (function (exports) {

  var els = exports.cache = {
    $megaMenu: '.mobile-menu'
  };

  exports.events = {
    'click@.header__mobile-menu-icon': 'toggleMenu | if(isMobile)',
    'click@.mobile-menu__item--expandable': 'showSubMenu | if(isMobile)',
    'click@.list__subitem--back': 'showParentMenu | if(isMobile)',
    'click@.list__subitem a': 'stopPropagation | if(isMobile)'
  };

  exports.init = function ($root) {
    App.Helpers.featureHelper(this, $root).start();
    this.isMobile = App.Devices.isMobileLayout;
  };

  exports.toggleMenu = function (e) {
    console.log('toggle menu');
    e.preventDefault();
    els.$megaMenu.toggleClass(hidden);
    $body.toggleClass(noScroll);
  };

  var currentLeft = 0;

  exports.showSubMenu = function (e) {
    e.preventDefault();
    console.log('test');
    var $target = $(e.currentTarget);
    $target.find('.item__list').removeClass(hidden);
    currentLeft = currentLeft - 100;
    transitionX(els.$megaMenu, currentLeft);
    $body.addClass(noScroll);
  };

  exports.showParentMenu = function (e) {
    e.stopPropagation();
    transitionX(els.$megaMenu, currentLeft = currentLeft + 100);
  };

  exports.stopPropagation = function (e) {
    e.stopPropagation();
  };

  function transitionX ($el, percent) {
    return $el.velocity({
      left: percent + '%'
    });
  }

  var noScroll = 'no-scroll';
  var hidden = 'hidden';
  var $body = $('body');

  return exports;

}(App.Features.mobileMenu || {}));
