// App.Features.searchQuery = (function(feature){

//   feature.init = function(element) {
//     $('.header__search-icon').click(showSearch);

//     function showSearch () {
//       var megaMenuDisplay = $('.mega-menu-desktop').css('display');
//       var mobileMenuDisplay = $('.mega-menu-mobile').css('display');
//       var overlayDisplay = $('#overlay').css('display');
//       if (megaMenuDisplay == 'block' && overlayDisplay == 'block' || mobileMenuDisplay == 'block' && overlayDisplay == 'block') {
//         hideMenus();
//       }
//       else {
//         hideMenus();
//         $('#overlay').slideToggle();
//       }
//     }

//     function hideMenus () {
//       $('.mega-menu-mobile').hide();
//       $('.mega-menu-desktop').hide();
//       $('.search-query').show();
//     }
//   }

//   return feature;
// }(App.Features.searchQuery || {}));
