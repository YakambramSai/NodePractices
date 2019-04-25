function demo1(){
    console.log("Thisa is demo1!")
}
function demo2(){
    console.log("Thisa is demo1!")
}
function demo3(){
    console.log("Thisa is demo1!")
}
module.exports.demo1=demo1;
module.exports.demo2=demo2;
module.exports.demo3=demo3;



//different way to export modules


module.exports={
    demo1:function (){
                console.log("Thisa is demo1!")
            },
    demo2:function (){
                console.log("Thisa is demo2!")
            },
    demo3:function (){
                console.log("Thisa is demo3!")
            }
}