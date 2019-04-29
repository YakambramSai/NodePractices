//function also datatype in java script
function demo(){
    console.log("Hello World!");
    
}
console.log(typeof demo);
test=demo;
console.log(typeof test);
test();


function demo(){
    return("Hello World!")
}
console.log(typeof demo)
test=demo()//return of demo is passed
console.log(typeof test)