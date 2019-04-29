// make synchronous 

function demo1(){
    console.log("This is demo1!")
	function demo2(){
    console.log("This is demo2!")
	function demo3(){
    console.log("This is demo3!")
     }
	 demo3();
    }
	demo2();
	console.log("Hello World!");

}


demo1();