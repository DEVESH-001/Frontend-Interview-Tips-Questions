// In synchronous code, tasks are executed one after the other, blocking the execution of subsequent tasks until the current one is completed.

// Asynchronous code allows tasks to be initiated and then continue executing other tasks without waiting for the previous ones to finish, often using callbacks, promises, or async/await for handling the results when they become available.

// await

// The await keyword is used in asynchronous functions to pause the execution of the function until a Promise is resolved or rejected. It can only be used inside functions declared with the async keyword.

//synchronous code :
console.log("Synchronous Code Start");

function syncFunction() {
  console.log("Inside Synchronous Function");
}
syncFunction();
console.log("Synchronous Code End");

//Asynchronous code :
console.log("Asynchronous Code Start");

function asyncFunction() {
  setTimeout(() => {
    console.log("Inside Asynchronous Function");
    console.log("Asynchronous Code End");
  }, 7000);
}

asyncFunction();
