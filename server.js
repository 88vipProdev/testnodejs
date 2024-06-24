const http = require('http');
const hostname = '127.0.0.1';
const port =3000;

const server = http.createServer((req ,res )=>{

    res.statusCode = 200 ;

    res.setHeader('content-Type','text/plain');

    res.end('hello world\n Nguyen tung lam vo cung dep trai ');

});

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});