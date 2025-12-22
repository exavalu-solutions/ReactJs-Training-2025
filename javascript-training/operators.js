// 1. console.log("=== NULLISH COALESCING (??) ===");
const ageFromInput = "18";   // imagine coming from an input box
const minAge = 18;

console.log("== comparison:", ageFromInput == minAge);   // true
console.log("=== comparison:", ageFromInput === minAge); // false

// Explanation:
// == converts "18" -> 18, so values match
// === compares type + value: "18" (string) !== 18 (number)


// 2. ?? - Nullish Coalescing: "Use right value if left is null/undefined"
// Scenario: User profile defaults

const user = {
  name: null,        // API returned null
  age: undefined,    // Missing field
  email: "user@example.com"
};

// ?? returns right value ONLY if left is null/undefined
const displayName = user.name ?? "Guest User";
const displayAge = user.age ?? 18;
const displayEmail = user.email ?? "no-email@example.com";

console.log("Name:", displayName);    // "Guest User" (null → default)
console.log("Age:", displayAge);      // 18 (undefined → default)
console.log("Email:", displayEmail);  // "user@example.com" (exists → original)

// 3. ?. - Optional Chaining: "Safe property access"
// Scenario: Nested API response
const apiResponse1 = {
  user: {
    profile: {
      name: "Alice"
    }
  }
};

const apiResponse2 = {
  user: null  // Partial response
};

// // WITHOUT ?. (CRASHES!)
// console.log("Without ?.:", apiResponse2.user.profile.name); // TypeError!

// WITH ?. (Safe!)
console.log("With ?.:", apiResponse1.user?.profile?.name);     // "Alice"
console.log("With ?.:", apiResponse2.user?.profile?.name);     // undefined (no error!)

console.log("anything..."); 
