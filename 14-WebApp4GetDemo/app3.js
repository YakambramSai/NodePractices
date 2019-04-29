
var http = require('http');
var fileSystem = require('fs');
var qs = require('querystring');
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
            var obj=qs.parse(data)
            res.write("<h1>"+JSON.stringify(obj)+"</h1>");
            res.write("<h1>"+obj.fname+"</h1>");
            res.write("<h1>"+obj.lname+"</h1>");
            res.end();
        });
        
     }
     else{
    res.end("<h1>None of the url was met!</h1>");
     }
} ).listen(8888);