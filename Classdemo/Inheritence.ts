
//Inheritence
class Person{
    protected fullName;
    constructor(private fname:string,private lname:string){
        this.fullName=fname+" "+lname
        console.log("Constructor of person was called!")
    }
    sayhi():void{
        console.log("Hi "+this.fullName)
    }
}
class Student extends Person{
    study(subject:string):void{
        console.log(this.fullName+" is studying "+subject)
    }
}
var s1:Student=new Student("Sachin","Tendulkar");
s1.sayhi();
s1.study("Mathematics");