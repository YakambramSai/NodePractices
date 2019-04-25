//Constructor
function person(f,l){
    this.fname=f;
    this.lname=l;
    this.sayhi=function(){
        console.log("Hi "+this.fname+" "+this.lname)
    }
}
p1=new person("Sachin","Tendulkar");
p2=new person("Saurav","Ganguly");
p3=new person("Rahul","Dravid");
p1.sayhi()
p2.sayhi()
p3.sayhi()