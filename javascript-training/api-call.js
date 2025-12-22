// 1. Promises: Fetch Single User
console.log("🔄 Fetching user with Promises...");

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  })
  .then(user => {
    console.log("✅ User found!");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`City: ${user.address.city}`);
  })
  .catch(error => {
    console.log("❌ Error:", error.message);
  });


// 2. Async/Await: Multiple Users (React Style!)
async function loadUsers() {
  try {
    console.log("🔄 Loading all users...");
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    console.log(`✅ Loaded ${users.length} users`);
    
    // Show first 3 users
    users.slice(0, 3).forEach(user => {
      console.log(`${user.name} (${user.email}) - ${user.company.name}`);
    });
    
  } catch (error) {
    console.log("❌ Failed to load users:", error.message);
  }
}

loadUsers();
