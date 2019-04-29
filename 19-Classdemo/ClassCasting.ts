
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
    constructor(fname:string,lname:string,protected stream:string){
        super(fname,lname);
        this.fullName=fname+" "+lname
        console.log("Constructor of student was called!")
    }
    study(subject:string):void{
        console.log(this.fullName+" is studying "+subject)
    }
    sayhi():void{
        super.sayhi();
        console.log("Good morning "+this.fullName)
    }
}
var s1:Person=new Student("Sachin","Tendulkar","sports");
s1.sayhi();
s1.study("Mathematics");


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
    constructor(fname:string,lname:string,protected stream:string){
        super(fname,lname);
        this.fullName=fname+" "+lname
        console.log("Constructor of student was called!")
    }
    study(subject:string):void{
        console.log(this.fullName+" is studying "+subject)
    }
    sayhi():void{
        super.sayhi();
        console.log("Good morning "+this.fullName)
    }
}
var s1:Person=new Student("Sachin","Tendulkar","sports");
p1.sayhi();
p1.study("Mathematics");