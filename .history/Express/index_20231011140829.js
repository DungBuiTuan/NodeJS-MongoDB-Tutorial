console.log('hi');
const http = require('http');

const server = http.createServer((req,res) =>{
    res.end('Content-Type','utf-8')
    res.end('Welcome to our home page')
    console.log("request was made");
})

server.listen(3000);