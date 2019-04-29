
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    console.log("Sending file: "+__dirname + "/" + "index.html")
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/user:id', function (req, res) {
  
   console.log(req.query);
   console.log(req.params);
    // Prepare output in JSON format
   response = {
      first_name:req.query.fname,
      last_name:req.query.lname
   };
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})