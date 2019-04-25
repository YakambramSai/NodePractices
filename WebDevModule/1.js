
var fs = require('fs');
var readStream = fs.createReadStream('index.html');
readStream.pipe(process.stdout);