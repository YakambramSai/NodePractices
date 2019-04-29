// creating an object literal.
var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname);
    }
}
obj.sayhi();


//Object Literal
var obj={}
obj.fname="Sachin";
obj.lname="Tendulkar";
obj.sayhi=function(){
                    console.log("Hi "+this.fname+" "+this.lname);
            }
obj.sayhi();