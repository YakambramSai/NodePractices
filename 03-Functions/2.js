// global scope
function demo(){
    console.log(data)
}
data="Hello World!";
demo();
//data="Hello World!";


//Scope local
function demo1(){
    var data1="Hello World!"
    
}
demo1();
console.log(data1)//error