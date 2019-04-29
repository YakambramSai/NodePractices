//writeFile creates a new file if file not existing.
//writeFile overwrites old data of the file if file already exists.
var fs = require('fs');
//create a file named mynewfile3.txt:
fs.writeFile('mynewfile3.txt', 'Hello new content!', function (err) {
  if (err) throw err;
  else
  console.log('Saved!');
});



//appendFile creates new file if file not existing!
//appendFile appends data to end of the file if file already exisits.

var fs = require('fs');
//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello new content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});



var fs = require('fs');
//w , a ,r
//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  fs.write(file,'Hello sample!',function(){
      console.log('Saved!');
  });
  
});


var fs = require('fs');
//w , a ,r
//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'a', function (err, file) {
  if (err) throw err;
  fs.write(file,'Hello sample!',function(){
      console.log('Saved!');
  });
  
});

//read file 
var fs = require('fs');
 fs.readFile('1.js',  function(err, data) {
   console.log(data.toString());
    
  });
  
  

var fs = require('fs');
//w , a ,r
//create an empty file named mynewfile2.txt:
fs.open('1.js', 'r', function (err, file) {
  if (err) throw err;
  b= Buffer.alloc(200);
  fs.read(file,b,0,200,0,function(err,bytesRead,buffer){
      
      console.log(buffer.toString())
      
  });
  
});


var fs = require('fs');
 data = fs.readFileSync('1.js');
console.log(data.toString())
  console.log("Hello World!")

  //if you want to block synchronous nature.
var fs = require('fs');
//create a file named mynewfile1.txt:
fs.appendFileSync('mynewfile1.txt', 'Hello new content!')
console.log("Hello world")



var fs = require('fs');
//Delete the file mynewfile2.txt:
fs.unlink('mynewfile3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});


//rename file name.
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    try{
            if (err) throw err;
    }
    catch(err){
        console.log('Some error occurred!');
        console.log(err);
    }
  
  console.log('File Renamed!');
});


