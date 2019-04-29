var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fullName = this.fname + " " + this.lname;
    }
    Person.prototype.sayhi = function () {
        console.log("Hi " + this.fullName);
    };
    return Person;
}());
var p1 = new Person("Sachin", "Tendulkar");
p1.sayhi();
