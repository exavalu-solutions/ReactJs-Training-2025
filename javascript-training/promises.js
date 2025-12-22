console.log("🚀 Starting order process...");

// ✅ PROMISES - Clean chain!
getUser(1)
    .then(user => {
        console.log("✅ 1. User:", user.name);
        return getOrder(user.id);
    })
    .then(order => {
        console.log("✅ 2. Order:", order.id);
        return processPayment(order.id);
    })
    .then(payment => {
        console.log("✅ 3. Payment:", payment.status);
        return sendEmail(payment.id);
    })
    .then(email => {
        console.log("✅ 4. Email sent! 🎉");
    })
    .catch(error => {
        console.log("❌ Error:", error.message);
    });

function getUser(id) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ id: id, name: "Bob" }), 300)
    );
}
function getOrder(userId) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ id: "ORD789", userId }), 400)
    );
}
function processPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderId === "ORD789") resolve({ id: "PAY123", status: "approved" });
            else reject(new Error("Payment failed"));
        }, 500);
    });
}
function sendEmail(paymentId) {
    return new Promise(resolve =>
        setTimeout(() => resolve({ success: true }), 200)
    );
}

// Benefits:

// Flat structure (no nesting)

// Single .catch() handles all errors

// Readable left → right