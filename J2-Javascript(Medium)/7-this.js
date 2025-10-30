// this :  refers to the context in which a function is called.
// In a method, this refers to the owner object.

const user = {
  name: "Devesh",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

user.greet();

const greet = user.greet;
greet(); //undefined
