
function inputfunction() {
    return new Promise(function(a,b){
        process.stdin.on("data", function(d){
        if (d) {
            a(d); 
        }
        else{
            b("error")
        }
    });
    });
}
//asynchronous means noblocking
async function main() {
    var obj={}
    console.log("Enter fname: ");
    obj.fname=await inputfunction().then(function(data){return data.toString().trim()}).catch(function(err){return err});
    console.log("Enter lname: ");
    obj.lname=await inputfunction().then(function(data){return data.toString().trim()}).catch(function(err){return err});
    console.log("Enter dept: ");
    obj.dept=await inputfunction().then(function(data){return data.toString().trim()}).catch(function(err){return err});
    console.log("Enter location: ");
    obj.loc=await inputfunction().then(function(data){return data.toString().trim()}).catch(function(err){return err});
    return obj;
    }
async function test(){
    var p=await main();
    console.log("return of main: ");

	test();