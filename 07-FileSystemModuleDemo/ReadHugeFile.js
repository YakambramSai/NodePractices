
var fs = require('fs');
//w , a ,r
//create an empty file named mynewfile2.txt:

fs.readFile('mynewfile2.txt',  function(err, data) {
   console.log(data.toString());
    
  });