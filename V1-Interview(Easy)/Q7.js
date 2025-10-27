// Q: What is and why might you destructure an object or array?

// A: Destructuring is a JavaScript syntax that allows you to "unpack" values from arrays or properties from objects into individual variables. Instead of accessing values through traditional bracket/dot notation, you can extract multiple values in a single, clean statement.

const dob = [12, 24, 2001];
const [day, month, year] = dob;
console.log(day);

const user = {
  f: "Devesh",
  l: "yadav",
};

const { f: FirstName, l: lastName } = user;
console.log(FirstName);
