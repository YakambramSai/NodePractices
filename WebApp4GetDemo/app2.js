var http = require('http');
var fileSystem = require('fs');
http.createServer(function(req,res){
    //console.log(req.url);
    if(req.method=='GET' && req.url=='/'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
    fileSystem.createReadStream('./index.html').pipe(res);
     }
     else if(req.method=='POST' && req.url=='/user'){
        var data="";
        req.on("data",function(d){
            data+=d.toString();
        });
        req.on("end",function(){
            res.writeHead(200, {
                    'Content-Type': 'text/html',
                });
            res.end("<h1>"+data+"</h1>");
        });
        
     }
     else{
    res.end("<h1>None of the url was met!</h1>");
     }
} ).listen(8888);