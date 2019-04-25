
/*
1)
marks
 0-39  FAIL
 40-59 THIRD
 60-79 SECOND
 80-100 FIRST
 
2) Assuming 1April was Monday
 print day on any particular date.
3) print factors of a number, 
12=> 1,2,3,4,6,12 , count=6  ,sum=28
count how amany factors , print sum of factors.
number prime or not.
5) factorial(5)
5*4*3*2*1=120
*/

marks=50;

if(marks >= 0 && marks <=39){
	console.log("FAIL");
}
else if(marks >= 40 && marks <=59){
	console.log("Third");
}

else if(marks >= 60 && marks <=79){
	console.log("Second");
}
else if(marks >=80 && marks <=100){
	console.log("First");
}else{
	console.log("invalid");
}
