var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayhi = function () {
        console.log("Hi " + this.fname);
    };
    return Person;
}());
var p1 = new Person();
p1.fname = "Sachin";
p1.sayhi();
//Property 'fname' is private and only accessible within class 'Person2'.ts(
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.sayhi = function () {
        console.log("Hi " + this.fname);
    };
    return Person2;
}());
var p2 = new Person2();
p2.fname = "Sachin";
p2.sayhi();
