var parse = require('co-body');
var router = require('koa-router')();
var fs = require('co-fs');
var sendMail = require('./send-mail');

router.get('/', function* (){
  this.type = "text/html";
  this.body = yield fs.readFile('./app/index.html');
});

router.get('/about-us', function* (){
  this.type = "text/html";
  this.body = yield fs.readFile('./app/about-us.html');
});

router.get('/associates-venues', function* (){
  this.type = "text/html";
  this.body = yield fs.readFile('./app/associates-venues.html');
});

router.get('/contact-us', function* (){
  this.type = "text/html";
  this.body = yield fs.readFile('./app/contact-us.html');
});

router.post('/contact-us', function *(){
  var body = yield parse(this);

  sendMail(body);

  this.status = 200;
});

module.exports = router;