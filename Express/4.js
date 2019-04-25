var express = require('express');
var app = express();
app.use(express.static('images'));
app.get('/', function (req, res) {
   res.send('<img src="http://localhost:8081/image01.jpg" height="300px" width="300px">'+
            '<img src="http://localhost:8081/image02.jpg" height="300px" width="300px">');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

