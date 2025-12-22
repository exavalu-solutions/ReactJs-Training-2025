// 1. Basic try/catch (Syntax Error)
try {
  // This will fail!
  const result = undefinedVariable + 10;
  console.log("This won't run");
} catch (error) {
  console.log("❌ Caught error:", error.message);
  console.log("Error type:", error.name);
  console.log("Stack trace:", error.stack);
}

console.log("✅ Code continues running!");


// 2. Custom Errors with throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError("Inputs must be numbers!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));    // Works: 5
  console.log(divide(10, 0));    // Throws custom error
  console.log(divide("10", 2));  // Throws TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.log("🔴 Type error:", error.message);
  } else {
    console.log("🔴 Math error:", error.message);
  }
}


// 3. finally Block (Always Runs)
let connection;

try {
  connection = openDatabase();  // Simulate
  const data = readData(connection);
  console.log("✅ Data loaded");
} catch (error) {
  console.log("❌ Read failed:", error.message);
} finally {
  // ALWAYS runs - cleanup!
  if (connection) {
    closeDatabase(connection);
    console.log("🔒 Connection closed");
  }
}

function openDatabase() { throw new Error("DB offline"); }
function closeDatabase(conn) { console.log("Closed:", conn); }
function readData(conn) { return "data"; }


// 4. Async/Await Error Handling (React Pattern!)
async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: User not found`);
    }
    
    const user = await response.json();
    console.log("✅ User:", user.name);
    
  } catch (error) {
    if (error.name === 'TypeError') {
      console.log("🌐 Network error - check internet");
    } else {
      console.log("💥 API error:", error.message);
    }
  }
}

// Test good & bad IDs
fetchUser(1);  // Works
setTimeout(() => fetchUser(999), 1000);  // Fails

// 5. Nested try/catch + Rethrow
function processFile(filename) {
  try {
    // Inner validation
    try {
      if (!filename) throw new Error("No filename provided");
      
      const data = JSON.parse(`{ invalid json }`);  // Will fail
      console.log("✅ File processed");
    } catch (parseError) {
      if (parseError instanceof SyntaxError) {
        console.log("🔧 JSON fixable, retrying...");
        // Fix and retry logic here
      } else {
        throw parseError;  // Rethrow unhandled errors
      }
    }
  } catch (error) {
    console.log("💥 Critical error:", error.message);
    // Log to monitoring service
  } finally {
    console.log("🏁 Cleanup complete");
  }
}

processFile("data.json");
