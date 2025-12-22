console.log("🚀 Starting order process...");

// ✅ ASYNC/AWAIT - Reads like synchronous code!
async function completeOrder() {
  try {
    const user = await getUser(1);
    console.log("✅ 1. User:", user.name);
    
    const order = await getOrder(user.id);
    console.log("✅ 2. Order:", order.id);
    
    const payment = await processPayment(order.id);
    console.log("✅ 3. Payment:", payment.status);
    
    const email = await sendEmail(payment.id);
    console.log("✅ 4. Email sent! 🎉");
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
}

completeOrder();

// Same functions as promises example
function getUser(id) {
  return new Promise(resolve => 
    setTimeout(() => resolve({ id: id, name: "Diana" }), 300)
  );
}
function getOrder(userId) {
  return new Promise(resolve => 
    setTimeout(() => resolve({ id: "ORD456", userId }), 400)
  );
}
function processPayment(orderId) {
  return new Promise(resolve => 
    setTimeout(() => resolve({ id: "PAY789", status: "approved" }), 500)
  );
}
function sendEmail(paymentId) {
  return new Promise(resolve => 
    setTimeout(() => resolve({ success: true }), 200)
  );
}
