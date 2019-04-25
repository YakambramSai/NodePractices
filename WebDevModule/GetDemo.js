
var http = require('http');
var fileSystem = require('fs');
//page not found 404
var notFound = function(res){
      res.writeHead(404,{"Content-type":"text/html"});
      res.write("<h2 style='color:red'>"+
      "Error 404 , page not found!!!</h2>");
      res.end();
}
http.createServer( (req, res)=>{
    console.log("Server started at 8888");
    if(req.method=='GET' && req.url=='/mydemo'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
    fileSystem.createReadStream('./index.html').pipe(res);
     }
    else if(req.method=='GET' && req.url=='/mydemo2'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
     fileSystem.createReadStream('./index.html').pipe(res);
     }
    else{
        notFound(res);
    }
} ).listen(8888);
