# Interview Repo

## Q1: What are falsey values in JavaScript?

- A: Falsey values in JavaScript are values that evaluate to false in a boolean context. They include:
  - false
  - 0 (zero)
  - "" (empty string)
  - null
  - undefined
  - NaN (Not-a-Number)

## Q2: What are the differences between const, let, and var?

- A:
  - `const`: used to declare variables that cannot be reassigned. It has block scope.
  - `let`: used to declare variables that can be reassigned. It also has block scope.
  - `var`: used to declare variables that can be reassigned. It has function scope and is hoisted.
    (hoisting means that the variable declaration is moved to the top of its scope before code execution.)
    (block scope means the variable is only accessible within the block it was defined in, such as within curly braces `{}`)

## Q3: How does == vs === differ?

- A: The `==` operator checks for equality with type coercion, meaning it converts the operands to the same type before making the comparison. The `===` operator, on the other hand, checks for strict equality without type coercion, meaning both the value and the type must be the same for it to return true.

## Q4: What is the difference between undefined and null?

- A: Both represent the absence of a value, but they have fundamentally different meanings and uses. `undefined` means a variable exists but hasn't been assigned a value—it's what JavaScript uses by default. `null` is an intentional assignment that indicates the absence of any object value—it's a deliberate way to say "no value".

## Q5: What are some JavaScript data types?

- A: JavaScript has several data types, which can be broadly categorized into primitive and non-primitive types.
  - **Primitive values**: string, number, boolean, null, undefined, symbol, bigint
  - **Non-primitive values**: objects, arrays, functions

## Q6: What do the spread and rest operators do?

- A: The spread (`...`) and rest (`...`) operators use identical syntax but have inverse behavior:
  - **Spread Operator**: Expands (spreads) elements of an iterable (like an array or object) into individual elements/values. Common uses include merging arrays/objects, passing array elements as function arguments, and copying/combining arrays/objects.
  - **Rest Operator**: Collects (packs) multiple elements and puts them into a single array or object. Commonly used in function parameters to collect all remaining arguments into an array.

## Q7: What is and why might you destructure an object or array?

- A: Destructuring is a JavaScript syntax that allows you to "unpack" values from arrays or properties from objects into individual variables. Instead of accessing values through traditional bracket/dot notation, you can extract multiple values in a single, clean statement. This makes code more readable and concise.

## Q8: What are Promises and why might you use them?

- A: Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never. Promises help manage asynchronous code by providing a cleaner and more manageable way to handle operations that take time to complete, such as fetching data from an API or reading files. They allow you to chain operations using `.then()` for success and `.catch()` for error handling, making the code more readable and easier to maintain.

## Q9: What is pass by reference and how does it differ from pass by value?

- A: In JavaScript, primitive data types (like numbers, strings, booleans, null, undefined, and symbols) are passed by value. This means that when you pass a primitive to a function, a copy of that value is made, and any changes made to that value inside the function do not affect the original value outside the function. Non-primitive types (objects, arrays, functions) are passed by reference, meaning the function receives a reference to the original object, and changes made to it inside the function will affect the original object.
