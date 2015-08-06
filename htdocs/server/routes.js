var parse = require('co-body');
var router = require('koa-router')();
var fs = require('co-fs');
var sendgrid  = require('sendgrid')('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');

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
  console.log(body);

  sendgrid.send({
    to:       body.email,
    from:     'xclusive-contact@xclusive-event-services.com',
    subject:  'Thanks for contacting us!',
    text:     'We are so glad you reached out to us. We will be back with you as soon as possible! \n \n Yours, \
               \n XCLUSIVE'
  }, function(err, json) {
    if (err) { return console.error(err); }
    console.log(json);
  });

  this.status = 200;
  this.statusText = 'YEAH PLAYA!';
});

module.exports = router;