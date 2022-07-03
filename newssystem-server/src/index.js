const Koa = require('koa');
const app = new Koa();

const config = require('./config');

require('./middlewares')(app);


app.listen(config.server.port,()=>{
    console.log(`server start in port ${config.server.port}`);
});