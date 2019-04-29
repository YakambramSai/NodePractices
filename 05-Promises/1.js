//Promise design pattern.
//A promise is a function which takes 2 functions as parameter.
//the first parameter function will be called if expected output is met.
//the second parameter function will be called if some error occurs.
value=Boolean(Math.round(Math.random()))
function demoPromise(a,b){
    if(value){
        a("Success!!!")
    }
    else{
        b("some error!!!")
    }
}
function success(data){
    console.log("success function was called with data: "+data);
}
function fail(err){
    console.log("failure function was called with err: "+err);
}
demoPromise(success,fail)



//Promise design pattern.
//A promise is a function which takes 2 functions as parameter.
//the first parameter function will be called if expected output is met.
//the second parameter function will be called if some error occurs.
//Asynchronous Code in nodejs becomes more  managable by using promise.
function demoPromise(a,b){
    setTimeout(function(){
        value=Boolean(Math.round(Math.random()));
        if(value){
        a("Success!!!")
    }
    else{
        b("some error!!!")
    }
    },Math.round(Math.random()*10000))
    
}
function success(data){
    console.log("success function was called with data: "+data);
}
function fail(err){
    console.log("failure function was called with err: "+err);
}
demoPromise(success,fail)



//Promise design pattern.
//A promise is a function which takes 2 functions as parameter.
//the first parameter function will be called if expected output is met.
//the second parameter function will be called if some error occurs.
//Asynchronous(non blocking) Code in nodejs becomes more  managable by using promise.
//A promise is a guarantee that one of the 2 functions will be executed!
//promise states
//Pending
//resolved
//rejected
//There is no use if you write synchronous code in your promise
function demoPromise(a,b){
    setTimeout(function(){
        value=Boolean(Math.round(Math.random()));
        if(value){
        a("Success!!!")
    }
    else{
        b("some error!!!")
    }
    },Math.round(Math.random()*10000))
    
}
demoPromise(function (data){
                console.log("success function was called with data: "+data);
            },function (err){
                console.log("failure function was called with err: "+err);
            });//non blocking!
            
console.log("Hello World!");



// demo on promise

function dataPromise(a,b){
    setTimeout(function(){
    var arr=["treat","no"]
    var resp=arr[Math.round(Math.random())];
    if(resp=="treat"){
        a()
    }else{
        b()
    }
    },Math.round(Math.random()*5000))
}
dataPromise(function(){
                console.log("Booking a cab");
            },function(){
                console.log("Friend refused to give treat!");
            });
console.log("Hello World!");
