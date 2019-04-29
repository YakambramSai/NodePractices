function createWallet(wid,balance){    
    var bal=balance;  
    return [
            function (amt){
                bal+=amt    
                console.log("deposit="+bal)        
            },
            function (amt){
                if(balance>amt){
                    bal-=amt
                    console.log("withdra="+bal)                    
                }
            },
            function (){
                    console.log("Balance="+bal)
            }
    ]
            
    
}
wallet1=createWallet(1,1000);
wallet1[0](200);
wallet1[1](100);
wallet1[2]();