// // 1. Spread: Copy Array (Expand → New Copy)
// const original = [1, 2, 3];

// // ❌ OLD WAY (manual copy)
// const copy1 = original.slice();  

// // ✅ SPREAD (expands array into new one)
// const copy2 = [...original];

// original.push(4);

// console.log("Original:", original);  // [1, 2, 3, 4]
// console.log("Spread copy:", copy2);  // [1, 2, 3] (unchanged!)

// // 2. Spread: Merge Arrays (Combine)
// const fruits = ["apple", "banana"];
// const veggies = ["carrot", "potato"];

// // ✅ SPREAD merges arrays
// const allFood = [...fruits, ...veggies, "pizza"];

// console.log(allFood);  
// // ["apple", "banana", "carrot", "potato", "pizza"]

// // 3. Spread: Copy Object (React State!)
// const user = { name: "Alice", age: 25 };

// // ✅ SPREAD copies object
// const userCopy = { ...user, city: "Kolkata" };

// user.age = 26;  // Won't affect copy

// console.log("Original:", user);     // { name: "Alice", age: 26 }
// console.log("Copy:", userCopy);     // { name: "Alice", age: 25, city: "Kolkata" }

// // 4. Rest: Collect Function Args
// // ✅ REST collects remaining arguments
// function sum(first, second, ...rest) {
//   console.log("First:", first);
//   console.log("Second:", second);
//   console.log("Rest:", rest);      // Array of remaining!
//   return rest.reduce((a, b) => a + b, first + second);
// }

// console.log("Total:", sum(1, 2, 3, 4, 5));  // 15

// // 5. Rest: Array Destructuring (Gather Remaining)
// const numbers = [10, 20, 30, 40, 50];

// // ✅ REST collects remaining elements
// const [first, second, ...remaining] = numbers;

// console.log("First:", first);     // 10
// console.log("Remaining:", remaining);  // [30, 40, 50]

// 6. Spread vs Rest Side-by-Side
const arr = [1, 2, 3, 4, 5];

// // SPREAD: EXPAND array
// console.log("SPREAD (expand):", [...arr, 6]);  // [1,2,3,4,5,6]

// // REST: COLLECT into array  
// const [a, b, ...rest] = arr;
// console.log("REST (collect):", rest);          // [3,4,5]

// SPREAD in function call
function add(x, y, z) 
{ 
  return x + y + z; 
}
console.log("Spread call:", add(...arr));       // 15
