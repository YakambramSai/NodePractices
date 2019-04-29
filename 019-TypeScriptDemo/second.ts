//any datatype
var data:any;
data="Hello"
data=true
data=123


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