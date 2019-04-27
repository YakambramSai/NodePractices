//compile type scrit code
var person = "Sachin";
console.log(person);
//error TS2322: Type '123456' is not assignable to type 'string'.
var person1 = 123456;
//error TS2345: Argument of type '"1"' is not assignable to parameter of type 'number'.
//error TS2345: Argument of type 'true' is not assignable to parameter of type 'number'.
function demo(a, b) {
    console.log(a + b);
}
demo(1, 2);
demo("1", "2");
demo(true, true);
//duplicate function implementation.
function demo(a, b) {
    return (a + b);
}
demo(1, 2);
//rror TS2322: Type 'string' is not assignable to type 'number'.
function demo(a, b) {
    return (a.toString() + b.toString());
}
demo(1, 2);
//Type 'number' is not assignable to type 'void'.ts(2322)
function demo(a, b) {
    return (a + b);
}
demo(1, 2);
//any datatype
var data;
data = "Hello";
data = true;
data = 123;
//Type 'number' is not assignable to type 'void'.ts(2322)
function demo1(a, b) {
    console.log(a + b);
}
demo(1, 2);
