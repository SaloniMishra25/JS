//this keyword refers to the current object

console.log(this); //refers to global object (window in browsers)

let student = {
  name: "saloni",
  age: 22,
  marks: {
    math: 95,
    physics: 90,
    chemistry: 88,
    english: 98,
    hindi: 92,
  },
  getAvg() {
    console.log(this); //refers to student object
    let total =
      this.marks.math +
      this.marks.physics +
      this.marks.chemistry +
      this.marks.english +
      this.marks.hindi;

    let avg = total / 5;
    return avg;
  },
};

console.log(student.getAvg());

console.log("--------------------");

//try and catch statement

try {
  console.log(a);
} catch (error) {
  console.log("Error occurred ");
}
console.log("Program work continue");

console.log("--------------------");
//Arrow function
const pow = (a, b) => {
  return a ** b;
};

console.log("Power : ", pow(2, 3));

//SetTimeout function

console.log("Hii there ");

setTimeout(() => {
  console.log("I'm inside setTimeout function ");
}, 2000);

console.log("Program ended ");

//SetInterval function
let count = 0;

let id = setInterval(() => {
  count++;
  console.log("Count : ", count);
}, 1000);

console.log("SetInterval id : ", id);

//to stop setInterval after 5 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("SetInterval stopped ");
}, 2000);

console.log("--------------------");