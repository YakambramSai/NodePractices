
var http = require('http');
var fileSystem = require('fs');
http.createServer(function(req,res){
    console.log(req.url);
    if(req.method=='GET' && req.url=='/'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
    fileSystem.createReadStream('./index.html').pipe(res);
     }
     else if(req.method=='GET' && req.url=='/user'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
    res.end("<h1>Hello</h1>");
     }
     else{
    res.end("<h1>Welcome</h1>");
     }
} ).listen(8888);