function createWallet(wid, balance){
var bal=balance;
function deposit(amt){
bal+=amt;
console.log("deposited"+amt+" to"+wid);
}
function withdraw(amt){
if(bal>amt){
 bal-=amt;
 console.log("withdrawn from wid"+bal);
 }
}
function showBalance(){
 console.log(wid+"Balance "+bal);
 }
 //return {"deposit":deposit(), "withdraw":withdraw(), "showBalance":showBalance()};
 return [deposit, withdraw, showBalance];
 }


w1=createWallet(1,1000);
w2=createWallet(2,200);
w3=createWallet(3,300);
w1[0](5000);
w1[1](2000);
w1[2]();