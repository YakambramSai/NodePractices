//Duplicate function implementation.ts(2393).

function demo(a:string,b:string):void{
    console.log(a+b)
}
function demo(a:number,b:number):void{
    console.log(a+b)
}
function demo(a:boolean,b:boolean):void{
    console.log(a+b)
}
demo(100,200);


//Solution is any

function demo(a:any,b:any):void{
    console.log(a+b)
}
demo(100,200);