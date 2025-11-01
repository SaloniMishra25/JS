//Funtion

function greet() {
  console.log("Hello, welcome to the JavaScript functions tutorial!");
}
greet();

//using loop
function printName() {
  for (let i = 1; i <= 5; i++) {
    console.log("Saloni Mishra");
  }
}
printName();

console.log("-------------------");

//function with arguments
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`Sum of ${num1} and ${num2} is : ${sum}`);
}

addNumbers(5, 10);

//Higher Order function
function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}
greet = function () {
  console.log("You can do it, Saloni!");
};
multipleGreet(greet, 5);

//Methods

const calculator = {
  add: function (a, b) {
    console.log(`Addition : ${a + b}`);
  },
  sub: function (a, b) {
    console.log(`Subtraction : ${a - b}`);
  },
  mul: function (a, b) {
    console.log(`Multiplication : ${a * b}`);
  },
  div: function (a, b) {
    console.log(`Division : ${a / b}`);
  },
};

console.log("-------------------");
calculator.add(20, 10);
calculator.sub(20, 10);
calculator.mul(20, 10);
calculator.div(20, 10);
console.log("-------------------");

//Another way of writing methods

const newCalculator = {
  add(a, b) {
    console.log(`Addition : ${a + b}`);
  },
  sub(a, b) {
    console.log(`Subtraction : ${a - b}`);
  },
  mul(a, b) {
    console.log(`Multiplication : ${a * b}`);
  },
  div(a, b) {
    console.log(`Division : ${a / b}`);
  },
};
console.log("-------------------");
calculator.add(20, 10);
calculator.sub(20, 10);
calculator.mul(20, 10);
calculator.div(20, 10);
console.log("-------------------");

const coffeeMachine = {
  start() {
    console.log("Machine Starting.........");
  },
  makeCoffee() {
    console.log("making coffeee");
  },
  stop() {
    console.log("Machine stopped");
  },
};

coffeeMachine.start()
