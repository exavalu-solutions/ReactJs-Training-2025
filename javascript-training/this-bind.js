// 1. this Loses Context (Big Problem!)
const person = {
  name: "Bob",
  showName: function() {
    console.log(this.name);
  }
};

// ❌ PROBLEM: this changes when extracted!
const extracted = person.showName;
extracted();  // this = undefined! Error!

// ✅ SOLUTION: Arrow function (lexical this)
const person2 = {
  name: "Charlie",
  showName: () => console.log(this.name)  // this = outer scope!
};

const extracted1 = person2.showName;
extracted2();  // this = undefined! Error!

// 2. React Event Handlers (Real-World Fix)
// Simulate React component
const button = {
  label: "Click Me",
  count: 0,
  
  // ❌ WRONG - this lost in callback
  wrongClick: function() {
    console.log("Count:", this.count);  // undefined!
  },
  
  // ✅ RIGHT - Arrow function
  rightClick: () => {
    this.count++;  // Lexical this = button
    console.log("Count:", this.count);
  }
};

console.log("Wrong this:", button.wrongClick());  // undefined
console.log("Arrow fixes:", button.rightClick()); // Works!

// 3. call(), apply(), bind() - Control this
function greet(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

const user1 = { name: "Diana" };
const user2 = { name: "Eve" };

// ✅ Explicitly set this
greet.call(user1, "Hello");     // Hello, I'm Diana
greet.apply(user2, ["Hi"]);     // Hi, I'm Eve

// ✅ bind() creates new function
const greetDiana = greet.bind(user1);
greetDiana("Hey");              // Hey, I'm Diana

