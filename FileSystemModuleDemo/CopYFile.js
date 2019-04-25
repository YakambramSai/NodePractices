const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('mynewfile2.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});


//Using readable stream
var fs1 = require('fs');
readFile = fs1.createReadStream("bigfile2.txt");
writeFile=fs1.createWriteStream("./bigfile2copy.txt");
readFile.on("readable", function(){
    while((chunk=readFile.read()) !=null){
        writeFile.write(chunk);
    }
    
readFile.on("end", function(){
    readFile.end();
});
    
});



var fs2 = require('fs');
var readableStream = fs2.createReadStream('file1.txt');
var writableStream = fs2.createWriteStream('file2.txt');
readableStream.pipe(writableStream);