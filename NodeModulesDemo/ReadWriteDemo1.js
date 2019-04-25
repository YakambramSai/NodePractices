process.stdout.write("Enter name: ");
process.stdin.on("readable",function(data){
    var data=process.stdin.read();
    if(data){
        console.log("Name:"+data)
    }
});

process.stdin.on("data",function(data){
    console.log("handler for data event!");
    process.stdout.write(data);
    process.exit();
});