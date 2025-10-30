// Q: What is pass by reference and how does it differ from pass by value?

// A: In JavaScript, primitive data types (like numbers, strings, booleans, null, undefined, and symbols) are passed by value. This means that when you pass a primitive to a function, a copy of that value is made, and any changes made to that value inside the function do not affect the original value outside the function.

const prim = 5;

function add(value) {
  value++;
  return value;
}
console.log(add(prim), prim);

const ref = { count: 5 };
function add2(value) {
  value.count++;
  return value.count;
}
console.log(add2(ref), ref.count);
