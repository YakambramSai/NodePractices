//second exmaple
var express = require('express');
var app = express();
app.use(express.static('images'));
//css, client side js , audio, videos , images
app.get('/', function (req, res) {
   res.send('<img src="http://localhost:8081/lighthouse.jpg" height="300px" width="300px">'+
            '<img src="http://localhost:8081/desert.jpg" height="300px" width="300px">');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})