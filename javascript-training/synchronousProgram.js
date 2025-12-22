console.log("1. Starting app");

// Synchronous - blocks everything
function processOrder() {
  console.log("2. Processing order...");
  console.log("3. Order processed!");
  return "Pizza 🍕";
}

const order = processOrder();  // Waits here, blocks
console.log("4. Delivered:", order);
console.log("5. App continues...");
