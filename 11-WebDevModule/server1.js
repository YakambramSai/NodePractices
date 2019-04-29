
var http = require('http');
var server=http.createServer(function(req, res){
                res.writeHead(200, {
                        'Content-Type': 'text/html',
                    });
                res.write('<h1>This is first example server!</h1>')
                res.end('Hello Http');
});
server.listen(8081);