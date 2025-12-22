// 1. MUTATING (Change Original) - AVOID IN REACT!

// ⚠️ Warning: These change the original array. React won't detect changes!

let fruits = ["apple", "banana", "orange"];

// ❌ MUTATE ORIGINAL ARRAY
fruits.push("grape");     // Adds to end
fruits.pop();             // Removes from end  
fruits.shift();           // Removes from start
fruits.unshift("strawberry");  // Adds to start
fruits.splice(1, 1, "pineapple");  // Replace at index 1

console.log("Mutated:", fruits);  // Original CHANGED!

// 2. ✅ IMMUTABLE (Create New) - USE IN REACT!
// a. slice() - Extract Portion
// const fruits = ["apple", "banana", "orange", "grape", "strawberry"];

// const middle = fruits.slice(1, 4);  // From index 1, length 3
// console.log("Slice:", middle);      // ["banana", "orange", "grape"]
// console.log("Original unchanged:", fruits);  // Still full array

// b. map() - Transform Each
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(n => n * 2);

// console.log("Doubled:", doubled);      // [2, 4, 6, 8, 10]
// console.log("Original:", numbers);     // [1, 2, 3, 4, 5]
