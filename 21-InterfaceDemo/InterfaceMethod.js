var Student = /** @class */ (function () {
    function Student(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fullname = fname + lname;
    }
    Student.prototype.sayhi = function () {
        return "Hi All";
    };
    ;
    return Student;
}());
function gm(person) {
    console.log("Good Morning " + person.fname);
}
var user = new Student("Sachin", "Tendulkar");
console.log(user.sayhi());
gm(user);
