//compile type scrit code
var person:string="Sachin";
console.log(person);


//error TS2322: Type '123456' is not assignable to type 'string'.
var person1:string=123456;

//error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
//error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
function demo(a:number,b:number){
    console.log(a+b);
}
demo(1,2);
demo("1","2");
demo(true,true);


//duplicate function implementation.
function demo(a:number,b:number):number{
    return(a+b);
}
demo(1,2);

//rror TS2322: Type 'string' is not assignable to type 'number'.
function demo(a:number,b:number):number{
    return(a.toString()+b.toString());
}
demo(1,2);


//Type 'number' is not assignable to type 'void'.ts(2322)
function demo(a:number,b:number):void{
    return(a+b);
}
demo(1,2);


//any datatype
var data:any;
data="Hello"
data=true
data=123


//No error
function demo1(a:number,b:number):any{
   console.log(a+b);
}
demo(1,2);


//Typescript array declaration.
var arr:number[]=[1,2,3,4,5]
console.log(arr);

//Type 'true' is not assignable to type
var arr:number[]=[1,2,3,4,5,true]
console.log(arr);

//any
var arr1:any[]=[1,2,3,4,5,true]
console.log(arr);


//tuple
var arr2:[string,boolean,number]=["Hello",true,213]
console.log(arr);

//Error
var arr2:[string,boolean,number]=["Hello",123,true]
console.log(arr);


//enum datatypes
enum Color {Red,Green,Blue}
var c:Color=Color.Red;
console.log(c)
var c:Color=Color.Green;
console.log(c)
var c:Color=Color.Blue;
console.log(c)


//
enum Color {Red="test",Green="demo",Blue="sample"}
var c:Color;
c=Color.Red;
console.log(c)
c=Color.Green;
console.log(c)
c=Color.Blue;
console.log(c)


//strict matching array values
//tuple
var arr5:[string,boolean]=["Hello",true]
console.log(arr);
function demo5(data:[string,string]):void{
    console.log(`${data[0]} stays in ${data[1]}`)
}
demo5(["Sachin","Mumbai",1]);




type person={
    fname:string,
    lname:string
}
var a:person={fname:"Sachin",lname:"Tendulkar"}
console.log(a);



type person={
    fname:string,
    lname:string
}
function sayhi(b:person){
    console.log("Hi "+b.fname+" "+b.lname)
}
var a={fname:"Sachin",lname:"Tendulkar"}
sayhi(a)

//success case
type person={
    fname:string,
    lname:string
}

type demo={
    fname:string,
    lname:string,
    mname:string
}
function sayhiw(b:person){
    console.log("Hi "+b.fname+" "+b.lname)
}
var a={fname:"Sachin",lname:"Tendulkar", mname:"Ramesh"}
sayhiw(a)


//Error
type person={
    fname:string,
    lname:string
}
var a:person={fname:"Sachin",lname:"Tendulkar",mname:"Ramesh"}
console.log(a)


//
type person={
    fname:string,
    lname:string
}
type demo={
    fname:string,
    lname:string,
    mname:string
}
function sayhi(b:person){
    console.log("Hi "+b.fname+" "+b.lname)
}
var a:demo={fname:"Sachin",lname:"Tendulkar",mname:"Ramesh"}
sayhi(a)
