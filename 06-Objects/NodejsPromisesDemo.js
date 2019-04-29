var demoPromise=new Promise(function (a,b){
                    setTimeout(function(){
                        value=Boolean(Math.round(Math.random()));
                        if(value){
                        a("Success!!!")
                    }
                    else{
                        b("some error!!!")
                    }
                    },Math.round(Math.random()*10000))
                    
                }).then(function (data){
                        console.log("success function was called with data: "+data);
                }).catch(function (err){
                    console.log("failure function was called with err: "+err);
                });
console.log("Hello World!");




var demoPromise1=new Promise(function (a,b){
                    setTimeout(function(){
                        value=Boolean(Math.round(Math.random()));
                        if(value){
                        a("Success!!!")
                    }
                    else{
                        b("some error!!!")
                    }
                    },Math.round(Math.random()*10000))
                    
                }).catch(function (err){
                        console.log("success function was called with data: "+err);
                }).then(function (data){
                    console.log("failure function was called with err: "+data);
                });
console.log("Hello World!");

//assignments

var friendPromise=new Promise(function (a, b){
	setTimeout(function(){
		var arr =["treat","no"];
    var resp=arr[Math.round(Math.random())];
    if(resp=="treat"){
        a()
    }else{
        b()
    }
    },Math.round(Math.random()*5000));
	
}).then(function(data){
	 console.log("Booking a cab");
})
.catch(function(err){
	console.log("Some error occurred!");
});


