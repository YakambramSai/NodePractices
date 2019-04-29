function createWallet(wid, balance) {
return {
            deposit: function (amt) {
                            balance = balance+amt
                            console.log('< Wallet ' + wid + '> Deposited ' + amt + ', balance is ' + balance);
                          }, 
            withdraw: function (amt) {
                        if (balance >= amt) {
                          balance = balance-amt;
                          console.log('< Wallet ' + wid + '> Withdrawn ' + amt + ', balance is ' + balance);
                        } else {
                          console.log('< Wallet ' + wid + '> Not sufficient balance to withdraw ' + amt + ', balance is ' + balance);
                        }
                      }, 
            show:    function () {
                    console.log('< Wallet ' + wid + '> balance is: ' + balance);
                  }
        }
}
w1 = createWallet(1,100);
w2 = createWallet(2,100);
w3 = createWallet(3,100);
w1.deposit(1000);
w1.withdraw(100);
w1.withdraw(300);
w2.deposit(2000);
w1.withdraw(300);
w3.withdraw(1000);
w1.show();
w2.show();
w3.show();