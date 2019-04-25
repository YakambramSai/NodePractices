
var fs = require('fs');
//w , a ,r
//create an empty file named mynewfile2.txt:
fs.open('mynewfile2.txt', 'a', function (err, file) {
  if (err) throw err;
  for(let i=0;i<1e6;i++){
    fs.write(file,"This is demo This id demo This is demo \n",function(err){
        if(err) throw err;
        console.log("File created!")
    });
}
  
});