// 1. Simple Calculator with HOF
// HOF: applyOperation takes two numbers and a function
function applyOperation(a, b, operation) {
  return operation(a, b);
}

// Different operations as functions
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// Use the same HOF with different operations
console.log("5 + 3 =", applyOperation(5, 3, add));        // 8
console.log("5 - 3 =", applyOperation(5, 3, subtract));   // 2
console.log("5 × 3 =", applyOperation(5, 3, multiply));   // 15
console.log("5 ÷ 3 =", applyOperation(5, 3, divide));     // 1.666...

// 2. Student Grade Processor
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 95 }
];

// HOF 1: Filter students by condition
function findStudents(students, checkFn) {
  return students.filter(checkFn);
}

// HOF 2: Transform grades
function processGrades(students, transformFn) {
  return students.map(transformFn);
}

// Different conditions for filtering
const topScorers = findStudents(students, s => s.score >= 90);
const passingStudents = findStudents(students, s => s.score >= 80);

console.log("Top Scorers (90+):");
console.log(topScorers.map(s => s.name + ": " + s.score));

console.log("\nPassing Students (80+):");
console.log(passingStudents.map(s => s.name + ": " + s.score));

// Transform: Add grades (A, B, C, etc)
const withGrades = processGrades(students, student => ({
  ...student,
  grade: student.score >= 90 ? "A" : student.score >= 80 ? "B" : "C"
}));

console.log("\nWith Letter Grades:");
withGrades.forEach(s => console.log(`${s.name}: ${s.score} = ${s.grade}`));


// 3. Timer Creator (HOF returns function)
// HOF that creates a timer function
function createTimer(delayMs) {
  return function() {
    console.log(`Starting ${delayMs}ms timer...`);
    setTimeout(() => {
      console.log(`⏰ Timer done!`);
    }, delayMs);
  };
}

// Create different timers
const quick = createTimer(1000);   // 1 second
const slow = createTimer(3000);    // 3 seconds

// Use them
console.log("Starting quick timer:");
quick();

console.log("\nStarting slow timer:");
slow();

console.log("\n(Waiting for timers...)");
