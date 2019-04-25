//Read input and write it by using process module.
console.log("Enter name:")
process.stdin.on("data",function(data){
    console.log("Hello "+data.toString());
    process.exit();
});