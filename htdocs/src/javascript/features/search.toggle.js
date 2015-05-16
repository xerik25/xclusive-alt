App.Features.searchToggle = (function(exports){

  var els = {};

  var active = 'active';

  function setEls ($root) {
    els.$root = $root;
    els.$overlay = els.$root.siblings('#overlay');
    els.$megaMenuDesktop = els.$overlay.find('.mega-menu-desktop');
    els.$megaMenuMobile = els.$overlay.find('.mega-menu-mobile');
    els.$headerSearchIcon = els.$root.find('.header__search-icon');
    els.$searchQuery = els.$overlay.find('.search-query');
  }

  function bindEvents () {
    els.$headerSearchIcon.click(toggleSearch);
  }

  function toggleSearch () {
    hideMenus();
    els.$overlay.slideToggle().toggleClass(active);
  }

  function hideMenus () {
    els.$megaMenuMobile.removeClass(active);
    els.$megaMenuDesktop.removeClass(active);
    els.$searchQuery.addClass(active);
  }

	exports.init = function($root) {
    setEls($root);
    bindEvents();
	};

	return exports;
}(App.Features.searchQuery || {}));
