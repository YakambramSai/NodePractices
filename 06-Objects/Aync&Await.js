
//Best Practices
//Promise returning functions
function demoPromise(){
    return new Promise(function(a,b){
        setTimeout(function(){
                        value=Boolean(Math.round(Math.random()));
                        if(value){
                        a("Success!!!")
                    }
                    else{
                        b("some error!!!")
                    }
                    
                    },Math.round(Math.random()*3000))
    });
}
function dataPromise(){
    return new Promise(function(a,b){
        setTimeout(function () {
            var arr = ["treat", "no"]
            var resp = arr[Math.round(Math.random())];
            if (resp == "treat") {
                a()
            } else {
                b()
            }
        }, Math.round(Math.random() * 3000))
    });
}
async function main(){
await dataPromise().then(function(){
        console.log("Bookign a cab");
        
}).catch(function(){
        console.log("No treat today!");
        
});
demoPromise().then(function(data){
        console.log("succes for demoPromise:"+data);
    }).catch(function(err){
        console.log("error for demoPromise"+err);
		
	});
}	
main();