var koa = require('koa');
var app = koa();
app.use(require('koa-static')(__dirname + '/static'));
app.listen(8080);
console.log('koa running');
