App.Services.Search = (function (_, $) {
  var _static = {};
  var _proto = {};
  var extend = App.Helpers.extend;
  var searchUrl = App.Constants.Search.Url;

  function Search (options) {
    this.init(options);
  }

  _static.extend = extend;

  _proto.init = function (options) {
    this.$root = options.$root;
    this.url = searchUrl;
    this.query = '';
    this.searchResponse = {
      data: null,
      success: false
    };
    this.setElements();
    this.bindEvents();
  };

  _proto.els = {};

  _proto.$ = function (selector) {
    return this.$root.find(selector);
  };

  _proto.setElements = function () {
    this.els.$searchForm = this.$('.search__form');
    this.els.$searchField = this.$('.search__form__field');
    this.els.$templateEl = this.$('.search__results-template');
    this.els.template = this.els.$templateEl.html();
    this.els.$searchResults = this.$('.search__results');
  };

  _proto.bindEvents = function () {
    this.$root.on('submit', this.els.$searchForm, _.bind(this.onSearchSubmit, this));
  };

  _proto.onSearchSubmit = function (e) {
    e.preventDefault();
    this.query = this.els.$searchField.val();
    this.fetchResults()
      .done(_.bind(onFetchSuccess, this))
      .fail(_.bind(onFetchError, this))
    ;
  };

  _proto.fetchResults = function () {
    var options = {
      url: this.url,
      type: 'GET',
      data: {query: this.query}
    };
    return $.ajax(options).promise();
  };

  function onFetchSuccess (data) {
    this.searchResponse.data = data;
    this.searchResponse.success = true;
    this.parseData(data);
    this.showResults(data);
  }

  function onFetchError (err) {
    this.searchResponse.data = null;
    this.searchResponse.success = false;
    console.log('Async Error: ', err);
  }

  _proto.parseData = function () {
    // do any data manupulation needed here
  };

  _proto.showResults = function () {
    var renderedTemplate = _.template(this.els.template, this.searchResponse.data);
    this.els.$searchResults.html(renderedTemplate);
  };

  _.assign(Search, _static);
  _.assign(Search.prototype, _proto);
  return Search;
})(_, jQuery);
