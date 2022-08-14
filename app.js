require('dotenv').config()
const {createServer} = require('./configureServer')
function runServer(port){
    const app = createServer()

    app.listen(port,()=>{
        console.log(`Server running at http://localhost:${port}`);
    })
}

runServer(process.env.PORT)