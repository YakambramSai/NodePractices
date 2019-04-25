var http = require('http');
var fileSystem = require('fs');
http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html',
    });
    var readStream = fileSystem.createReadStream('./index.html');
    readStream.on("data",function(data){
        response.write(data);
    });
    readStream.on("end",function(){
        response.end();
    });
    
})
.listen(2000);