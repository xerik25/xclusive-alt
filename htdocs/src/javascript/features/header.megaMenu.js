// App.Features.megaMenu = (function(menu) {

// // New JS
//   function showMegaMenu () {
//     $('.dropdown-menu-li').mouseenter(function(){$('#overlay').show();$('.mega-menu-desktop').show();});
//     $('#overlay').mouseleave(function(){$('#overlay').hide();$('.mega-menu-desktop').hide();});
//   }
//   showMegaMenu();

//   $('.header__mobile-menu-icon').click(function() {
//     $('#overlay').slideToggle();
//     $('.mega-menu-mobile').show();
//   });

//   $('.menu-box .menu-mobile-animate').click(function() {

//     $(this).parent().animate({
//         left: '-50%'
//     }, 300, function() {
//         $(this).css('left', '-150%');
//     });

//     $(this).parent().next().animate({
//         left: '25%'
//     }, 500);
//   });

//   $('.menu-box .back').click(function() {

//     $(this).parent().animate({
//         left: '100%'
//     }, 300, function() {
//         $(this).css('left', '150%');
//     });

//     $(this).parent().prev().animate({
//         left: '25%'
//     }, 500);
//   });
// // New JS

//   function MegaMenu(element) {
//     this.$el = element;
//   }

//   MegaMenu.Constants = {
//   };

//   _.extend(MegaMenu.prototype, App.Utils.MegaMenu, {
//     init: function() {
//       this.setElems(this.$el);
//       this.options = _.extend(MegaMenu.Constants);
//       this.bindEvents();
//     },

//     setElems: function(element) {
//       this.els = {
//         mobileMenuButton: element.find('.header__mobile-menu-icon')
//       };
//     },

//     bindEvents: function() {
//       this.els.mobileMenuButton.on('click', _.bind(this.mobileMenuOpen, this));
//       $.subscribe('resize', _.bind(this.menuResized, this));
//     },

//     mobileMenuOpen: function() {
//       console.log('Menu Open!');
//       // this.someFunction();
//     },

//     menuResized: function() {
//       console.log('do something because the page resized');
//     }
//   });

//   menu.init = function(element) {
//     var megaMenu = new MegaMenu(element);
//     megaMenu.init();
//     return megaMenu;
//   };

//   return menu;

// }(App.Features.megaMenu || {}));
