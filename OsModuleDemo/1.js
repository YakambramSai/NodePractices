var os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log(os.userInfo())




console.log('type : ' + os.type());
// OS platform
console.log('platform : ' + os.platform());
// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");
// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");
console.log(os.hostname() )




var os = require("os");
console.log(os.networkInterfaces() )
console.log(os.EOL)