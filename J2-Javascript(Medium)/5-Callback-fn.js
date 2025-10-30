//Callback fn : is a function i.e passed as an arugnment to another function and is executed after some operation has been completed.

//Example of callback fn :

function fetchData(callBack) {
  setTimeout(() => {
    const data = { user: "devesh", role: "frontend developer" };
    callBack(data);
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});

document.getElementById("btn").addEventListener("click", function (event) {
  logger("Button Clicked", event);
});








//code to change bg color when clicked
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];

function changeBgColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

document.getElementById("colorBtn").addEventListener("click", changeBgColor);