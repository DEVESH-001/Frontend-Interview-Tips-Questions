// Q :What do the spread and rest operators do?

// A:
// - The spread (...) and rest (...) operators use identical syntax but have inverse behavior

// Spread Operator (...)
// Purpose: Expands (spreads) elements of an iterable (like an array or object) into  individual elements/values. Common use:

// merging arrays/objects, passing array elements as function arguments, copying/combining arrays/objects.

const users = ["Devesh", "Akshat", "Neelesh"];
const allUsers = [...users, "Naman", "Kapil"]; // Spread operator

console.log(allUsers);

const user = { firstName: "Devesh", lastName: "Yadav" };
const defaults = { channel: "CodeWithDevesh", ...user };
console.log(defaults);

// destructuring : means extracting values from objects or arrays

const { channel, ...remainder } = defaults;
console.log("remainder", remainder);

// Rest Operator (...)

//Purpose: Collects (packs) multiple elements and puts them into a single array or object.

function add(...nums) {
  return nums.reduce((total, current) => {
    return total + current;
  }, 0);
}

console.log("REST operator ", add(2, 3, 4, 5, 6));
