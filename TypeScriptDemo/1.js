//code without problem.
function add(a,b){
    return a+b
};
console.log(add(1,2));
console.log(add(3,2));
console.log(add(1.435,2.546));

//code with problem

console.log(add(1,2));
console.log(add(3,2));
console.log(add(1.435,2.546));
console.log(add(1,"Hello"));
console.log(add("Hello ","World!"));
console.log(add("Hello ",213213));
console.log(add(true,true));


//Resolve above problem.

function add(a,b){
    if(typeof a=="number" && typeof b=="number")
        return a+b
    else throw "Only numbers allowed!"
}
console.log(add(1,2))
console.log(add(3,2))
console.log(add(1.435,2.546))
console.log(add(1,"Hello"))
console.log(add("Hello ","World!"))
console.log(add("Hello ",213213))
console.log(add(true,true))