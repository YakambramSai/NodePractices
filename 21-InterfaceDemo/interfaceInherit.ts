
interface walkable{
    walk():void;
}
interface living{
    see():void;
    listen():void;
}
interface Person extends living,walkable{
     fname:string;
     lname:string;
     sayhi():string;
}
class Student implements Person{
    private fullname:string;
    constructor(public fname:string,public lname:string ){
        this.fullname=fname+lname;
    }
     sayhi():string{
         return "Hi All"
     };
}
function gm(person:Person){
    console.log("Good Morning "+person.fname);
}
let user=new Student("Sachin","Tendulkar");
gm(user);