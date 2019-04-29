//closure returning a constructor.
var person =(function (){
                function person(fname,lname){
                    this.fname=fname;
                    this.lname=lname;
                }
                person.prototype.sayhi=function (){
                    console.log("Hi "+this.getFullName())
                }
                person.prototype.getFullName=function (){
                    return(this.fname+" "+this.lname)
                }
                
                return person;
            })()
            

p1=new person("Sachin","Tendulkar");
p1.sayhi()