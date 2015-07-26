var app = require('koa')();
var parse = require('co-body');
var router = require('koa-router')();
var fs = require('co-fs');
var cors = require('koa-cors');

app.use(cors());

router.post('/test', function *(){
  var body = yield parse(this);
  console.log(body);
  this.status = 200;
  this.statusText = 'YEAH PLAYA!';
});

app.use(router.routes());

console.log('Koa server listening on port 3000');

app.listen(3000);