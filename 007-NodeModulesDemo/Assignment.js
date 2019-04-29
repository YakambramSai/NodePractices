
function inputfunction() {
    return new Promise(function(a,b){
        process.stdin.on("data", function(d){
        if (d) {
            a(d); // Writes actual value
        }
        else{
            b("error")
        }
    });
    });
   
}
async function main() {
    var obj={}
    process.stdout.write("Enter fname: ");
    obj.fname=await inputfunction().then(function(data){return data.toString()}).catch(function(){});
    process.stdout.write("Enter lname: ");
    obj.lname=await inputfunction().then(function(data){return data.toString()}).catch(function(){});
    process.stdout.write("Enter dept: ");
    obj.dept=await inputfunction().then(function(data){return data.toString()}).catch(function(){});
    process.stdout.write("Enter location: ");
    obj.loc=await inputfunction().then(function(data){return data.toString()}).catch(function(){});
    console.log(obj)
    process.exit();
    
}
main();


//looping 
async function main() {
    var obj={}
    var arr=["fname","lname","dept","location"];
    for(let i=0;i<arr.length;i++){
         process.stdout.write("Enter "+arr[i]+": ");
        obj[arr[i]]=await inputfunction().then(function(data){return data.toString().trim()}).catch(function(){});
    }
    console.log(obj);
    process.exit();
    
}
main();