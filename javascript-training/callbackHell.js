// 1. Callback Hell (The Problem)
console.log("🚀 Starting order process...");

// ❌ CALLBACK HELL - Nested pyramid!
getUser(1, (user) => {
  console.log("✅ 1. User:", user.name);
  
  getOrder(user.id, (order) => {
    console.log("✅ 2. Order:", order.id);
    
    processPayment(order.id, (payment) => {
      console.log("✅ 3. Payment:", payment.status);
      
      sendEmail(payment.id, (email) => {
        console.log("✅ 4. Email sent! 🎉");
      });
    });
  });
});

// Fake async functions
function getUser(id, callback) {
  setTimeout(() => callback({ id: id, name: "Alice" }), 300);
}
function getOrder(userId, callback) {
  setTimeout(() => callback({ id: "ORD123", userId }), 400);
}
function processPayment(orderId, callback) {
  setTimeout(() => callback({ id: "PAY456", status: "approved", orderId }), 500);
}
function sendEmail(paymentId, callback) {
  setTimeout(() => callback({ success: true }), 200);
}

// Problems:

// Deep nesting (indentation nightmare)

// Error handling messy

// Hard to read/maintain