// 1. Basic Dot vs Bracket (Known Keys)
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

// ✅ DOT NOTATION - Key is known/static
console.log("Dot notation:");
console.log(user.name);    // Alice
console.log(user.age);     // 25
console.log(user.email);   // alice@example.com

// ✅ BRACKET NOTATION - Same result when key is known
console.log("\nBracket notation (same):");
console.log(user["name"]);    // Alice
console.log(user["age"]);     // 25


// 2. Dynamic Keys (Bracket ONLY!)
// const user = { name: "Bob", age: 30 };

// // ✅ DYNAMIC: Key from variable
// const searchField = "name";  // Could be "age", "email", etc
// console.log("Dynamic key:", user[searchField]);  // Bob

// const searchField2 = "age";
// console.log("Dynamic key2:", user[searchField2]);  // 30

// // ❌ DOT FAILS with variables!
// console.log("❌ This fails:", user.searchField);  // undefined!

// 3. Special Characters (Bracket ONLY!)
// const user = {
//   "first-name": "Charlie",     // Hyphen!
//   "user@email.com": "password123",  // Email as key!
//   "2nd-place": "Silver medal"
// };

// // ✅ SPECIAL CHARS: Bracket notation only
// console.log("Hyphen key:", user["first-name"]);     // Charlie
// console.log("Email key:", user["user@email.com"]);  // password123
// console.log("Number key:", user["2nd-place"]);      // Silver medal

// // ❌ DOT FAILS with special chars!
// console.log("❌ Dot fails:", user."first-name");  // Syntax error!
