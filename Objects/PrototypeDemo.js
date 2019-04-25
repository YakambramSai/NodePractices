//Prototype
//Using one object as prototype/parent
//to create another object.
//Object to Object inheritence.
var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname);
    }
}
obj2=Object.create(obj)
console.log(obj2)
console.log(obj2.fname)
console.log(obj2.lname)
obj2.sayhi()



//Prototype
//Using one object as prototype/parent
//to create another object.
//Object to Object inheritence.
var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname);
    }
}
obj2=Object.create(obj)
obj2.fname="Virat"
obj2.lname="Kohli"
console.log(obj2)
console.log(obj2.fname)
console.log(obj2.lname)
obj2.sayhi()



//Prototype
//Using one object as prototype/parent
//to create another object.
//Object to Object inheritence.
var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname);
    }
}
obj2=Object.create(obj)
obj2.fname="Virat"
obj2.lname="Kohli"
obj2.sayhi()
obj.team="India"
console.log(obj2.team)

//to know parent object
console.log(obj2.__proto__)



//Prototype
//Using one object as prototype/parent
//to create another object.
//Object to Object inheritence.
var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname);
    }
}
obj2=Object.create(obj)
obj2.fname="Virat"
obj2.lname="Kohli"
obj2.sayhi()
obj.team="India"
console.log(obj2.__proto__)
obj2.__proto__.fname="Saurav"
obj2.__proto__.lname="Ganguly"
console.log(obj)


//Object Literal
var obj=new Object()
obj.fname="Sachin";
obj.lname="Tendulkar";
obj.sayhi=function(){
                    console.log("Hi "+this.fname+" "+this.lname);
            }
obj.sayhi();



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
//parent of p1 , p2 , p3 also will be same
//since their constructor is same.
console.log(p1.__proto__)
console.log(p2.__proto__)
console.log(p3.__proto__)


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
//parent of p1 , p2 , p3 also will be same
//since their constructor is same.
p1.__proto__.team="India"
console.log(p1.__proto__)
console.log(p2.__proto__)
console.log(p3.__proto__)



from Virtual Classroom 55 to All Participants:
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
//parent of p1 , p2 , p3 also will be same
//since their constructor is same.
//if multiple objects (like p1 , p2 ,p3 ) are created from same constructor
//their prototype can be read using Constructor_name.prototype
person.prototype.team="India"
console.log(p1.__proto__)
console.log(p2.__proto__)
console.log(p3.__proto__)
console.log(person.prototype)



//TYPESCRIPT = CLOSURES+PROTOTYPING+CONSTRUCTOR
//Constructor
function person(fname,lname){
    this.fname=fname;
    this.lname=lname;
}
person.prototype.sayhi=function(){
                        console.log("Hi "+this.fname+" "+this.lname)
                    }
p1=new person("Sachin","Tendulkar");
p2=new person("Saurav","Ganguly");
p3=new person("Rahul","Dravid");
console.log(p1)
console.log(p2)
console.log(p3)
p1.sayhi()
p2.sayhi()
p3.sayhi()
