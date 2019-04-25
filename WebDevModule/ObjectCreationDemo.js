
data='[{"fname":"Sachin","lname":"Tendulkar"},{"fname":"Rahul","lname":"Dravid"}]'
//console.log(data)
console.log(typeof data)
var obj=JSON.parse(data)
console.log(typeof obj);
//console.log(obj[0].fname);
//console.log(obj[0].lname);
//console.log(obj[1].fname);
//console.log(obj[1].lname);



data=[{"fname":"Sachin","lname":"Tendulkar"},{"fname":"Rahul","lname":"Dravid"}]
//console.log(data)
console.log(typeof data)
var obj=JSON.stringify(data)
console.log(typeof obj);
console.log(obj);
