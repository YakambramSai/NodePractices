function demo1(){
    console.log("This is demo1!")
}
function demo2(){
    console.log("This is demo2!")
}
function demo3(){
    console.log("This is demo3!")
}
setTimeout(demo1,2000);//non blocking!
setTimeout(demo2,1500);
setTimeout(demo3,1000);
console.log("Hello World!");




//Annonymous functions:




setTimeout(function (){
    console.log("This is demo1!")
},2000);//non blocking!
setTimeout(function (){
    console.log("This is demo2!")
},1500);
setTimeout(function (){
    console.log("This is demo3!")
},1000);
console.log("Hello World!");


//Non - blocking code examples.

// console.log(Math.round(Math.random()*5000))
setTimeout(function (){
                console.log("This is demo1!")
            },Math.round(Math.random()*5000));//non blocking!
setTimeout(function (){
                console.log("This is demo2!")
            },Math.round(Math.random()*5000));
setTimeout(function (){
                console.log("This is demo3!")
            },Math.round(Math.random()*5000));
console.log("Hello World!");




