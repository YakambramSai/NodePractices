//annonymnous functions.
(function(name){
console.log(name);
})("Sachin");


//
var demo=function (name){
                    console.log("Hello "+name)
                };
demo("Sachin")

//Scope global local
//functional programing using anonymnous function.
function demo(a){
    console.log("This is demo!")
    a()
    console.log("exiting demo!")
    
}
 demo(function (){
        console.log("Hello World!")
    });//reference is passed!
	
	
	
//annonymnous functions for closure	
	function outer(){
    var count=0
    return function (){
                count+=1;
                console.log(count);
            }
     
}
var hello =outer();
hello();
hello();
hello();
hello();
var hi=outer()
hi();
hi();
hi();
hello();
hello();
hello();
hello();
hello();