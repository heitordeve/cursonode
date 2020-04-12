const http = require("http")
const host = "127.0.0.1"
const port = 3000
const url = `http://${host}:${port}`

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Bem Vindo<br/>NODE.JS');
})


server.listen(port, host, ()=>{
    console.log(`Server running at ${url}`);
})

const open = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start':'xgd-open');

require('child_process').exec(open + ' ' + url);