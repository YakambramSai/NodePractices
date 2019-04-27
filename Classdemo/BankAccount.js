var BankAccount = /** @class */ (function () {
    function BankAccount(accId, ownerName, balance) {
        this.accId = accId;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    ;
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Available amount is:" + this.balance);
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
        else {
            throw new Error("Insufficient amount");
        }
    };
    BankAccount.prototype.showBalance = function () {
        console.log("Available amount is :" + this.balance);
    };
    return BankAccount;
}());
var bankAccount = new BankAccount("Acc1234", "Yakambram", 10000);
bankAccount.deposit(2000);
bankAccount.withdraw(6000);
bankAccount.showBalance();
