//any datatype
var data;
data = "Hello";
data = true;
data = 123;
//enum datatypes
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(c);
var c = Color.Green;
console.log(c);
var c = Color.Blue;
console.log(c);
