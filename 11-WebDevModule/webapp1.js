
var http = require('http');
var fileSystem = require('fs');
//page not found 404

http.createServer( (req, res)=>{
    reqHandler(req, res);
} ).listen(8888);
function notFound(res){
      res.writeHead(200,{"Content-type":"text/html"});
      res.write("<h2 style='color:red'>Error 404 , page not found!!!</h2>");
      res.end();
}
//request handler
function reqHandler(req, res){
if(req.method=='GET' && req.url=='/mydemo'){
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
         var filename = "./index.html";
  var readStream = fileSystem.createReadStream(filename);
 // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
      // This just pipes the read stream to the response object (which goes to the client)
    console.log("reading stream..!!");
    readStream.pipe(res);
  });
readStream.on('end', function() {
     console.log('end of readStream'+filename);
     res.end()
});
} else{
    notFound(res);
}


}
// This catches any errors that happen while creating the readable stream (usually invalid name