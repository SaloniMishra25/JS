//What is the output of the following code?

const object = {
  message: "Hello, World!",
  logMessage() {
    console.log(this.message);
  },
};

setTimeout(object.logMessage, 1000);

console.log("---------------------");

let length = 4;

function callback() {
  console.log(this.length);
}

const object2 = {
  length: 5,
  method(callback) {
    callback();
  },
};

object2.method(callback, 1, 2);
