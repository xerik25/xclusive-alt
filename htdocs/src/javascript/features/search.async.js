App.Features.searchAsync = (function (exports) {

  exports.init = function ($root) {
    var Search = App.Services.Search;
    this.searchInstance = new Search({
      $root: $root
    });
  };

  return exports;

})(App.Features.searchAsync || {});
