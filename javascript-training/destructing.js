// 1. Basic Object Destructuring (Most Common)
const user = {
  name: "Alice",
  age: 25,
  city: "Kolkata"
};

// ❌ OLD WAY (3 lines)
const name1 = user.name;
const age1 = user.age;
const city1 = user.city;

// ✅ NEW WAY (1 line!)
const { name, age, city } = user;

console.log("Name:", name);  // Alice
console.log("Age:", age);    // 25
console.log("City:", city);  // Kolkata

// 2. Array Destructuring (Order Matters)
const coordinates = [25.78, 87.47];  // [lat, lng]
const users = ["Alice", "Bob", "Charlie"];

// ❌ OLD WAY
const lat1 = coordinates[0];
const lng1 = coordinates[1];
const firstUser1 = users[0];

// ✅ ARRAY DESTRUCTURING (position-based)
const [lat, lng] = coordinates;
const [firstUser, secondUser, thirdUser] = users;

console.log("Lat:", lat);        // 25.78
console.log("Lng:", lng);        // 87.47
console.log("First:", firstUser); // Alice

// 3. Function Parameters
// Simulate React component
// function UserCard(user) {
//   // ❌ OLD (inside function)
//   const name = user.name;
//   const age = user.age;
  
//   return `${name} (${age} years)`;
// }

// // ✅ DESTRUCTURING IN PARAMS (React style!)
// function UserCardModern({ name, age }) {
//   return `${name} (${age} years)`;
// }

// const user = { name: "Bob", age: 30 };
// console.log("Old style:", UserCard(user));
// console.log("Modern:", UserCardModern(user));

// 4. with spread operator
// const user = {
//   name: "Alice",
//   age: 25,
//   email: "alice@example.com",
//   city: "Kolkata",
//   country: "India"
// };

// // ✅ DESTRUCTURE specific + SPREAD rest
// const { name, age, ...userDetails } = user;

// console.log("Specific:", name, age);           // Alice 25
// console.log("Rest:", userDetails);             // {email, city, country}
// console.log("Rest keys:", Object.keys(userDetails));  // ['email', 'city', 'country']

