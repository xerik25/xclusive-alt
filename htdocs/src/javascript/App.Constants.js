App.Constants.DESKTOP   = 992;
App.Constants.TABLETLG  = 980;
App.Constants.TABLETSM  = 768;
App.Constants.MOBILE    = 767;

App.Constants.MOBILEMQ  = 'only screen and (max-width: ' + App.Constants.MOBILE + 'px)';
App.Constants.TABLETMQ  = 'only screen and (max-width: ' + App.Constants.TABLETLG + 'px)';
App.Constants.DESKTOPMQ = 'only screen and (min-width: ' + App.Constants.DESKTOP + 'px) and (max-width: 1199px)';
App.Constants.DESKTOPLGMQ = 'only screen and (min-width: 1200px)';

App.Constants.containerWidths = {
  lgDesktop:  1200,
  smDesktop:  992,
  tablet:     768
};

App.Constants.Config = {
  // (( expression ))
  // ((- interpolate ))
  // ((= escape ))
  // shouldn't conflict with hbs or asc
  TemplateSettings: {
    evaluate: /\(\((.+?)\)\)/g,
    interpolate: /\(\(-(.+?)\)\)/g,
    escape: /\(\(=(.+?)\)\)/g
  }
};

App.Constants.Search = {
  Url: 'http://localhost:9000/json/search-results.json'
};

_.templateSettings = App.Constants.Config.TemplateSettings;
