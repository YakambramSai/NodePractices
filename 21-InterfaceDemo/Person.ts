//Interface properties always public.
//https://www.typescriptlang.org/samples/index.html
//https://drive.google.com/open?id=0B6UFRQ0r5ie_dXhjTVk2dmEtY0E
interface Person{
     fname:string;
     lname:string;
}
class Student implements Person{
    private fullname:string;
    constructor(public fname:string,public lname:string ){
        this.fullname=fname+lname;
    }
}
function gm(person:Person){
    console.log("Good Morning "+person.fname);
}
let user=new Student("Sachin","Tendulkar");
gm(user);