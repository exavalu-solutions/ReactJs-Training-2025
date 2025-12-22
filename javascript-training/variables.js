// 1. Scope Differences (Function vs Block Scope)
// var - Function scoped (leaks out of blocks)
// function testVar() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x); // 10 - accessible outside if block
// }

// // let/const - Block scoped (stays inside blocks)
// function testLetConst() {
//     if (true) {
//         let y = 20;
//         const z = 30;
//     }
//     console.log(y); // ReferenceError: y is not defined
//     console.log(z); // ReferenceError: z is not defined
// }


// testVar();
// testLetConst();

// 2. Reassignment Differences
// var a = 1;
// a = 2; // ✅ Works
// console.log(a); // 2

// let b = 1;
// b = 2; // ✅ Works
// console.log(b); // 2

// const c = 1;
// c = 2; // ❌ TypeError: Assignment to constant variable

// 3. Hoisting behaviour
// Hoisting applies to variable and function declarations.

// varTest = 100;
// console.log(varTest); 
// var varTest;

// console.log(varTest);   // undefined (hoisted, initialized as undefined)
// var varTest = 100;
// console.log(letTest);   // ReferenceError: Cannot access 'letTest' before initialization
// let letTest = 200;
// console.log(constTest); // ReferenceError: Cannot access 'constTest' before initialization
// const constTest = 300;

// 5. Temporal Dead Zone (TDZ) Demo

// 'var' variables are hoisted with undefined, while 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.

// function demoTDZ() {
//     // let/const create TDZ from declaration to first use
//     // console.log(a); // ReferenceError (TDZ)
//     // let a = 1;
//     // var doesn't have TDZ
//     // console.log(b); // undefined
//     // var b = 2;
    
//     console.log(c); // undefined
//     const c = 2;
// }

// demoTDZ();

// greet(); // "Hello everone!"
// function greet() {
//     console.log("Hello everone!");
// }

// hello(); // TypeError: hello is not a function
// var hello = function() {
//     console.log("Hi!");
// };