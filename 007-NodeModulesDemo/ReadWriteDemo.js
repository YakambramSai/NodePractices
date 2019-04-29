process.stdout.write("Enter name: ");
process.stdin.on("data",function(data){
    process.stdout.write(data);
    process.exit();
})