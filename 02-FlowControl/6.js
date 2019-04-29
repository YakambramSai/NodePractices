//asociate array demo

data = {fname:"Sachin", lastName:"Tendulkar", city:"mumbai"};
data.team="India";

//It wont work in this case.
/* for(i=0; i<data.length; i++){
	console.log(data[i]);
} */

// will print keys
for(k in data){
 console.log(k);
}

// print values
for(k in data){
 console.log(k+"==="+data[k]);
}


// key should be hard coded value.
for(k in data){
 console.log(data.k);
}