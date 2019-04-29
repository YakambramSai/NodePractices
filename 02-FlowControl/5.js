data=[1, "Hello", null, true];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);


for(i=0; i<data.length; i++){
	console.log(data[i]);
}

//Dont use this
data[12]=89;

//use this
data.push("hi");

data.push(1000)
for(i=0;i<data.length;i++){
    console.log(data[i])
}