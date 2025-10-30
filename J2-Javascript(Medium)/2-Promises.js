//  Promises represent eventual completion or failure of an asynchronous operation.
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

// Consuming a Promise
myPromise
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

//  Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never.

// Promises help manage asynchronous code by providing a cleaner and more manageable way to handle operations that take time to complete, such as fetching data from an API or reading files. They allow you to chain operations using .then() for success and .catch() for error handling, making the code more readable and easier to maintain.
