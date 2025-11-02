//Array Methods
//1. forEach

let arr = [1, 2, 3, 4];

arr.forEach(function (el) {
  console.log(el);
});

console.log("-------------------------");

let studentInfo = [
  { name: "saloni", age: 22, state: "Delhi" },
  { name: "Abhishek", age: 22, state: "MP" },
  { name: "Nikhil", age: 23, state: "Mumbai" },
];

console.log(studentInfo); //Print all data

//Now i want to print student state only
console.log("State : ");
console.log("-------------------------");
studentInfo.forEach((data) => {
  console.log(data.state);
});
console.log("-------------------------");

let nums = [1, 2, 3, 4, 5, 6];

//Map Method
let double = nums.map((el) => {
  return el * 2;
});
console.log(double);

//Filter Method
let even = nums.filter((el) => {
  return el % 2 == 0;
});
console.log("Even ", even);

let odd = nums.filter((el) => {
  return !(el % 2) == 0;
});
console.log("Odd : ", odd);

//Every Method
nums = [2, 4, 6, 8];
let check = nums.every((el) => {
  return el % 2 == 0;
});

console.log(check); // Output : true

//Reduce Method
let finalVal = nums.reduce((res, el) => {
  console.log(res);
  return res + el;
});
console.log("Final Value : ", finalVal); //20
console.log("-------------------------");

//Spread Method
nums = [2, 5, 4, 5, 6, 7, 4, 6, 8];
let allNum = [...nums];
console.log("All numbers Spread : ", allNum);
