const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Mouse", price: 25, quantity: 3 },
  { id: 3, name: "Keyboard", price: 80, quantity: 1 }
];

const USER_MIN_SPEND = 50;
const TAX_RATE = 0.08;
const DISCOUNT_THRESHOLD = 500;

// Calculate total
let total = 0;
for (let i = 0; i < cart.length; i++) {
  const item = cart[i];
  const itemTotal = item.price * item.quantity;
  total += itemTotal;
  console.log(`${item.name}: $${itemTotal}`);
}

console.log("\n--- Validation Logic ---");

// if/else: Check minimum spend
if (total < USER_MIN_SPEND) {
  console.log("❌ Cart total too low. Add more items!");
} else if (total < DISCOUNT_THRESHOLD) {
  console.log("✅ Valid order. Continue to checkout");
} else {
  console.log("🎉 Eligible for 10% discount!");
  total = total * 0.9;
}

// Ternary: Apply tax
const taxAmount = total * TAX_RATE;
const finalPrice = total + taxAmount;

console.log(`\nSubtotal: $${total.toFixed(2)}`);
console.log(`Tax (8%): $${taxAmount.toFixed(2)}`);
console.log(`Final: $${finalPrice.toFixed(2)}`);

// Ternary: Status message
const status = finalPrice > 1000 
  ? "Premium order" 
  : finalPrice > 500 
  ? "Standard order" 
  : "Small order";

console.log(`Order Type: ${status}`);
