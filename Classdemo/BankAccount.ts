class BankAccount{
    constructor(private accId:string,  private ownerName:string, private balance:number){};
    public deposit(amount:number){
        this.balance+=amount;
        console.log("Available amount is:"+this.balance);
    }

    public withdraw(amount:number){
        if(this.balance>amount){
            this.balance-=amount;
        }else{
            throw new Error("Insufficient amount");
        }

    }

    public showBalance(){
        console.log("Available amount is :"+this.balance);
    }
}

var bankAccount=new BankAccount("Acc1234", "Yakambram", 10000);
bankAccount.deposit(2000);
bankAccount.withdraw(6000);
bankAccount.showBalance();