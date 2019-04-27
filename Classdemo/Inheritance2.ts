
//Inheritence
class Person{
    protected fullName;
    constructor(protected fname:string,protected lname:string){
        this.fullName=fname+" "+lname
        console.log("Constructor of person was called!")
    }
    sayhi():void{
        console.log("Hi "+this.fullName)
    }
}
class Student extends Person{
    constructor(protected fname:string,protected lname:string,protected stream:string){
        super(fname,lname);
        this.fullName=fname+" "+lname
        console.log("Constructor of student was called!")
    }
    study(subject:string):void{
        console.log(this.fullName+" is studying "+subject)
    }
}
var s1:Student=new Student("Sachin","Tendulkar","sports");
s1.sayhi();
s1.study("Mathematics");