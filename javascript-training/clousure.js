// 1. Simple Counter (Classic Closure)
// Closure: Inner function remembers 'count'
function createCounter() {
  let count = 0;  // Private variable
  
  return function() {
    count++;      // Remembers & modifies outer variable
    return count;
  };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

// Each counter is independent! Each counter has its own private count.
const counter2 = createCounter();
console.log(counter2());  // 1 (separate!)

// 2. Bank Account (Real-World Private Data)
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // PRIVATE - can't access directly
  
  return {
    deposit: (amount) => {
      balance += amount;
      return `Deposited $${amount}. New balance: $${balance}`;
    },
    withdraw: (amount) => {
      if (balance >= amount) {
        balance -= amount;
        return `Withdrew $${amount}. New balance: $${balance}`;
      }
      return "❌ Insufficient funds";
    },
    getBalance: () => `$${balance}`
  };
}

const myAccount = createBankAccount(100);
console.log(myAccount.deposit(50));    // Deposited $50. New balance: $150
console.log(myAccount.withdraw(30));   // Withdrew $30. New balance: $120
console.log(myAccount.getBalance());   // $120

// ❌ Can't access directly!
console.log("Direct access fails:", myAccount.balance);  // undefined

// balance is PRIVATE! Only methods can change it. Real-world encapsulation.

// 3. Multiplier Factory (Custom Functions)
// Closure creates custom multipliers
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const square = createMultiplier(2);  // Wait for it...

console.log(double(5));   // 10
console.log(triple(5));   // 15
console.log(square(5));   // 10

// Each remembers its own factor!
