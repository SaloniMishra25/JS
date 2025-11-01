//Write a function that prints "Hello World" 5 times at intervals of 2s each

let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

//to stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("Clear Interval ran");
}, 10000);
