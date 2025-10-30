// Map, Reduce, Filter

//(These are higher-order array methods that transform data without mutating the original array.)

// 1. Map:-  Transforms each element, returns new array of same length

// const numbers = [1, 2, 3, 4, 5];
// const sqNumbers = numbers.map((num) => num * num);
// console.log("Squared Numbers using Map:", sqNumbers); // [1, 4, 9, 16, 25]

//2. Filter:- Returns new array with elements that pass the test

// const mixedNumbers = [10, 20, 33, 40, 65, 98, 100, 1001];
// const evenNumbers = mixedNumbers.filter((num) => num % 2 === 0);
// console.log("Even Numbers using Filter:", evenNumbers); // [10, 20, 30, 40, 88, 100]

//3. Reduce:- Reduces array to single value

// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum);

// accumulator (first parameter) - Holds the accumulated result from previous iterations. On the first iteration, it equals the initialValue (0 in this case)
// current (second parameter) - The current element being processed in the array.

const cart = [
  { name: "Laptop", price: 5000, quantity: 1 },
  { name: "Phone", price: 2000, quantity: 2 },
  { name: "Chocolate", price: 3000, quantity: 10 },
];

//map:calculate total price for each item
const itemTotals = cart.map((item) => {
  return { ...item, total: item.price * item.quantity };
});
console.log("Item Totals :", itemTotals); // [5000, 4000, 3000]

//filter: get items with quantity greater than 1
const filteredItems = cart.filter((item) => item.quantity > 1);
console.log("Filtered Items :", filteredItems); // [{name:"Phone", price:2000, quantity:2}]

//reduce: calculate total cart value
const totalCartValue = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
console.log(`Total Cart Price ${totalCartValue}`);
