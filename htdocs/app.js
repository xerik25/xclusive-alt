var app = require('koa')();
var serve = require('koa-static');
var cors = require('koa-cors');
var router = require('./server/routes');

app.use(cors());
app.use(router.routes());
app.use(serve('./app'));

console.log('Koa server listening on port 3000');

app.listen(3000);