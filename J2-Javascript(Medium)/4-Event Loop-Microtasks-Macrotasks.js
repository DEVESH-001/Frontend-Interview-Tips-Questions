// JavaScript is single-threaded but handles async operations through the event loop. Microtasks (Promises) have priority over macrotasks (setTimeout, setInterval).

console.log("1: Sync");

setTimeout(() => {
  console.log("2: Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Microtask (Promise)");
});

console.log("4: Sync");

// Real world example

class NotificationQueue {
  constructor() {
    this.queue = [];
  }

  addUrgent(message) {
    Promise.resolve().then(() => {
      console.log(`Urgent ${message}`);
    });
  }
  addNormal(message) {
    setTimeout(() => {
      console.log(`normal ${message}`);
    }, 0);
  }
}

const notifier = new NotificationQueue();
notifier.addNormal("Notification 1");
notifier.addUrgent("Notification 2");
notifier.addNormal("Notification 3");
console.log("Main");
