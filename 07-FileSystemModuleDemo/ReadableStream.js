
var fs = require('fs');
var readableStream = fs.createReadStream('mynewfile2.txt');
var data = '';
readableStream.on('open', function() {
    console.log("Stream opened!")
});
readableStream.on('data', function(chunk) {
    console.log("chunk: "+chunk);
});
readableStream.on('end', function() {
    console.log("stream ended!");
});