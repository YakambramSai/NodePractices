
class Person{
    public fname:string;
    sayhi():void{
        console.log("Hi "+this.fname)
    }
}
const p1= new Person()
p1.fname="Sachin";
p1.sayhi();
