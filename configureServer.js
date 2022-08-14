const welcomeRouter = require('./routes/welcome.routes')
const Express = require('express');
const bodyParser = require('body-parser');

exports.createServer = ()=>{
    const server = Express();
    server.use(bodyParser.json())
    server.use('/',welcomeRouter)
    
    return server;
}