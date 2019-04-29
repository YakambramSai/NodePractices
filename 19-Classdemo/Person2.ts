
//Property 'fname' is private and only accessible within class 'Person2'.ts(
    class Person2{
        private fname:string;
        sayhi():void{
            console.log("Hi "+this.fname)
        }
    }
    const p2= new Person2()
    p2.fname="Sachin";
    p2.sayhi();