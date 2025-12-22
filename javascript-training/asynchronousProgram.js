console.log("1. Starting app");

// Asynchronous - doesn't block
function processOrderAsync() {
  console.log("2. Processing order (async)...");
  setTimeout(() => {
    console.log("3. Order processed after 2s!");
    return "Pizza 🍕";
  }, 2000);  // Fake 2-second delay
}

processOrderAsync();  // Starts but doesn't wait
console.log("4. App stays responsive!");
console.log("5. User can click buttons, scroll...");
