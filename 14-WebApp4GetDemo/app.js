
var http = require('http');
var fileSystem = require('fs');
var url = require('url');
http.createServer(function(req,res){
    //console.log(req.url);
    var q = url.parse(req.url, true);
    if(req.method=='GET' && q.pathname=='/'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
    fileSystem.createReadStream('./index.html').pipe(res);
     }
     else if(req.method=='GET' && q.pathname=='/user'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
    res.end("<h1>"+q.query.fname+" "+q.query.lname+"</h1>");
     }
     else{
    res.end("<h1>None of the url was met!</h1>");
     }
} ).listen(8888);