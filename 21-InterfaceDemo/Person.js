var Student = /** @class */ (function () {
    function Student(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.fullname = fname + lname;
    }
    return Student;
}());
function gm(person) {
    console.log("Good Morning " + person.fname);
}
var user = new Student("Sachin", "Tendulkar");
gm(user);
