// Q 2 : What are the differences between const, let, and var?

// - A :
//   - `const`: used to declare variables that cannot be reassigned. It has block scope.
//   - `let`: used to declare variables that can be reassigned. It also has block scope.
//   - `var`: used to declare variables that can be reassigned. It has function scope and is hoisted.
//     (hoisting means that the variable declaration is moved to the top of its scope before code execution.)
//     (block scope means the variable is only accessible within the block it was defined in, such as within curly braces `{}`)

if(false){
    let firstNameLet = "Devesh";
    var firstName = "Devesh"; 
}
//console.log(firstNameLet);

const PI = 3.14;
PI =3.15
console.log(PI);
