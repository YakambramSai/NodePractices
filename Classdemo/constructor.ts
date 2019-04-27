
class Person {
    private fullName;
    constructor(private fname:string,private lname:string){
        this.fullName= this.fname+" "+this.lname;
    }
    sayhi():void{
        console.log("Hi "+this.fullName)
    }
}
const p1= new Person("Sachin","Tendulkar")
p1.sayhi();