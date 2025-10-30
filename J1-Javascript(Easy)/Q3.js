// Q: How does == vs === differ?

// A: The == operator checks for equality with type coercion, meaning it converts the operands to the same type before making the comparison.

// The === operator, on the other hand, checks for strict equality without type coercion, meaning both the value and the type must be the same for it to return true.

const value1 = 5;
const value2 = "5";

console.log(value1 == value2);
console.log(value1 === value2);