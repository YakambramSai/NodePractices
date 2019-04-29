setTimeout(function (){
                    console.log("This is demo1!")
                    setTimeout(function (){
                        console.log("This is demo2!");
                        setTimeout(function (){
                            console.log("This is demo3!");
                            console.log("Hello World!");
                        },Math.round(Math.random()*5000));
                    },Math.round(Math.random()*5000));
            },Math.round(Math.random()*5000));//blocking!
			
			
			
setTimeout(function (){
                    console.log("This is demo1!")
                    setTimeout(function (){
                        console.log("This is demo2!");
                        setTimeout(function (){
                            console.log("This is demo3!");
                            console.log("Hello World!");
                        },2000);
                    },2000);
            },2000);//blocking!			
			