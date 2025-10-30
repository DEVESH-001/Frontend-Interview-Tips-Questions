// Clousers :
// a clouser gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
  //return y;
}
console.log(x()); // 7

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
      return balance;
    },
    withdraw: function (amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return amount;
    },
    getBalance: function () {
      return balance;
    },
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50));
console.log(myAccount.getBalance());
console.log(myAccount.withdraw(350));
console.log(myAccount.getBalance());