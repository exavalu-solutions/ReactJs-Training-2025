// // 1. map
// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);

// // 2. filter
// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);

// 3. reduce
// const n = [1, 2, 3, 4, 5];
// const sum = n.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // The callback (acc, curr) => acc + curr adds all elements. 0 is the initial value of the acc.


// 4. forEach
// The forEach function executes a provided function once for each array element. It does not return a new array like map.

// const n = [1, 2, 3];
// n.forEach((num) => console.log(num * 2));

// 5. find
// The find function returns the first element in the array that satisfies a given condition.
// const n = [1, 2, 3, 4, 5];
// const fEven = n.find((num) => num % 2 === 0);
// console.log(fEven);

// If no element satisfies the condition, it returns undefined.

// 6. some
// The some function checks if at least one array element satisfies a condition.
// const n = [1, 2, 3, 4, 5];
// const hasNeg = n.some((num) => num < 0);
// console.log(hasNeg);

// It returns true if any element passes the condition, false otherwise.

// 7. every
// The every function checks if all array elements satisfy a condition.
const n = [1, 2, 3, 4, 5];
const allPos = n.every((num) => num > 0);
console.log(allPos)
// It returns true only if all elements pass the condition.