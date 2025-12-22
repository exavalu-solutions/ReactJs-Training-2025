// 1. DECLARATION - Hoisted (can call BEFORE definition)
console.log("=== Function Declaration ===");
// console.log(authenticate("alice", "password123")); // Works! Hoisted

// function authenticate(username, password) {
//   if (username === "alice" && password === "password123") {
//     return "✅ Login successful";
//   }
//   return "❌ Invalid credentials";
// }

// console.log("\n=== Function Expression ===");
// // Expression - NOT hoisted (must define BEFORE calling)
// try {
//   console.log(validateEmail("test@example.com")); // ERROR!
// } catch (error) {
//   console.log("❌ Error:", error.message);
//   console.log("   → validateEmail is not defined yet\n");
// }

// const validateEmail = function(email) {
//   return email.includes("@") ? "✅ Valid email" : "❌ Invalid email";
// };

// // NOW it works
// console.log(validateEmail("test@example.com")); // ✅ Works


// // 2. 

// console.log("=== OLD PATTERN (Declaration) ===");

// Function declaration - works but less flexible
// function OldButton() {
//   return "Old Button Component";
// }

// function OldButton() {
//   return "Old Button Component";
// }
// console.log(OldButton()); // ✅ Works

// console.log("\n=== MODERN PATTERN (Expression) ===");

// Const expression - React standard (safer, prevents redeclaration)
// const ModernButton = function(props) {
//   return `Modern Button: ${props.label}`;
// };

// console.log(ModernButton({ label: "Click Me" })); // ✅ Works

// console.log("\n=== Arrow Function Expression (React Preferred) ===");

// Arrow expression - Concise, lexical this, recommended in React
const ArrowButton = (props) => {
  return `Arrow Button: ${props.label}`;
};

console.log(ArrowButton({ label: "Submit" })); // ✅ Works

console.log("\n=== Why Expression Over Declaration ===");

// // Expression allows const (prevents accidental redeclaration)
// const Button1 = () => "Button 1";
// const Button1 = () => "Redefined"; // ❌ SyntaxError!

// // Declaration allows redeclaration (bad - can cause bugs)
// function Button2() { return "Button 2"; }
// function Button2() { return "Redefined"; } // ⚠️ Silent override!
// console.log(Button2()); // "Redefined" - accidental override!

// console.log("\n=== Real React Use Case ===");

// // Components as expressions
// const Card = ({ title, content }) => {
//   return {
//     title: title,
//     content: content,
//     render: () => `<div class="card"><h3>${title}</h3><p>${content}</p></div>`
//   };
// };

// const myCard = Card({ 
//   title: "React Guide", 
//   content: "Learn JavaScript first!" 
// });

// console.log(myCard.render());

// console.log("\n=== Hoisting Danger Demo ===");

// // Declaration hoisting can hide bugs
// console.log("User logged in:", isUserValid("john")); // true (wrong!)

// function isUserValid(user) {
//   return user; // Accidentally defined later
// }

// vs safer expression approach
const isUserActive = (user) => {
  return user === "joh"; // Defined after call
};

try {
  console.log("User active:", isUserActive("john")); // Error caught immediately
} catch (e) {
  console.log("❌ Safer to catch this early:", e.message);
}
