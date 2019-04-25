data=5;
result=1;
count=0;
for(i=1; i<=data; i++){
	result+=i;
	count ++;
	
}
console.log("some of factors :"+result);
console.log(count);

result=1;
count=0;
for(i=1; i<=data; i++){
	result*=i;
	count ++;
	
}
console.log("factorial of "+data+":"+result);
console.log(count);