// Q: What are Promises and why might you use them?

// A: Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, in the future, or never.

// Promises help manage asynchronous code by providing a cleaner and more manageable way to handle operations that take time to complete, such as fetching data from an API or reading files. They allow you to chain operations using .then() for success and .catch() for error handling, making the code more readable and easier to maintain.

async function getPost() {
  console.log(1);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }

  console.log(3);
}
console.log("4");

getPost();
