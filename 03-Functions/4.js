// check return value
function sayHi(){
    return("Hello World!")
}
function demo(a){
    console.log(typeof a)
}
demo(sayHi())//return of sayHi is passed!



//passing a function as parameter to another function.
function sayHi(){
    return("Hello World!")
}
function demo(a){
    console.log(typeof a)
    console.log("This is demo!")
    console.log(a())
    console.log(a())
    console.log(a())
    console.log("exiting demo!")
    
}
demo(sayHi)//reference of sayHi is passed!


//nested function
function demo(){
    
    console.log("This is demo!")
    function test(){
        console.log("This is test!")
    }
    sample=test;
}
demo()
sample();
sample();
sample();
sample();



//Closures
//function returning nested function
function outer(){
    console.log("This is outer!")
    function inner(){
        console.log("This is inner!")
    }
    return inner
}
var test=outer()
console.log(typeof test)
test();
test();
test();
test();


//Lexical scoping
function outer(){
    var data="Hello World!"
    function inner(){
        console.log(data)
        //nested function can read local variables of outer.
    }
    return inner
}
demo=outer()
demo();
demo();
demo();
demo();
demo();
var counter = 0;
function hello(){
	counter++;
	//console.log(counter);
}

hello();	
hello();	
hello();	
hello();	
hello();	
console.log(counter);

//local variable of a function are deleted as soons as function finishes execution.
//They are recreated when function is re invoked.

function outer(){
    var count=0
    function inner(){
        count+=1;
        console.log(count);
    }
    return inner
}
var hello =outer();
hello();
hello();
hello();
hello();
hello();

// separate counts

function outer(){
    var count=0
    function inner(){
        count+=1;
        console.log(count);
    }
    return inner
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


//multiple returns

function demo(){
  // return ["Hello World!",1];
  return {s:"Hello World",data:1}
}
data=demo()
console.log(data.s)
console.log(data.data)