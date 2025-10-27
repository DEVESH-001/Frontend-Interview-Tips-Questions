# Interview Repo

## Q: What are falsey values in JavaScript?

- A: Falsey values in JavaScript are values that evaluate to false in a boolean context. They include:
  - false
  - 0 (zero)
  - "" (empty string)
  - null
  - undefined
  - NaN (Not-a-Number)

## Q: What are the differences between const, let, and var?

- A :
  - `const`: used to declare variables that cannot be reassigned. It has block scope.
  - `let`: used to declare variables that can be reassigned. It also has block scope.
  - `var`: used to declare variables that can be reassigned. It has function scope and is hoisted.
    (hoisting means that the variable declaration is moved to the top of its scope before code execution.)
    (block scope means the variable is only accessible within the block it was defined in, such as within curly braces `{}`)

