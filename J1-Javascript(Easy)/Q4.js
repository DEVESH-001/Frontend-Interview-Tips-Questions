// Q: What is the difference between undefined and null?

// Both represent the absence of a value, but they have fundamentally different meanings and uses.

// undefined means a variable exists but hasn't been assigned a value—it's what JavaScript uses by default.

// null is an intentional assignment that indicates the absence of any object value—it's a deliberate way to say "no value".


const user = {
  firstName: null,
};

const user2 = {};

console.log(user.firstName);
console.log(user2.firstName);