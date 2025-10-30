// Q 1: What are falsey values in JavaScript?

//- A: Falsey values in JavaScript are values that evaluate to false in a boolean context. They include:
  // - false
  // - 0 (zero)
  // - "" (empty string)
  // - null
  // - undefined
  // - NaN (Not-a-Number)

if (null) {
  console.log("null");
}
if (undefined) {
  console.log("undefined");
}
const arr = [];
if (arr.length) {
  console.log("0");
}
if (0) {
  console.log("0");
}
const word = "";
if (word) {
  console.log("empty string");
}
if (false) {
  console.log("false");
}
