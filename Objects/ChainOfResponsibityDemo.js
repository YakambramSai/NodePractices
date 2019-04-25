var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname)
    },
    saygm:function(){
        console.log("Good Morning "+this.fname+" "+this.lname)
    },
    sayge:function(){
        console.log("Good Evening "+this.fname+" "+this.lname)
    }
    
}
obj.sayhi();
obj.saygm();
obj.sayge();


//Chain of responsibility
var obj={
    fname:"Sachin",
    lname:"Tendulkar",
    sayhi:function(){
        console.log("Hi "+this.fname+" "+this.lname)
        return this;
    },
    saygm:function(){
        console.log("Good Morning "+this.fname+" "+this.lname);
        return this;
    },
    sayge:function(){
        console.log("Good Evening "+this.fname+" "+this.lname);
        return this;
    }
    
}
obj.sayhi().saygm().sayge();