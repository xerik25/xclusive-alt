'use strict';

let app = require('koa')();
const serve = require('koa-static');
const cors = require('koa-cors');
const router = require('./server/routes');

const PORT = process.argv[2] || 3001;

app.use(cors());
app.use(router.routes());
app.use(serve('./app'));

app.listen(PORT, ()=>{
  console.log(`Koa server listening at PORT ${PORT}`);
});
