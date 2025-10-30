// Question:
// Write a JavaScript program to check whether an element exists in an array or not.

let arr = [1, 2, 3, 5, 6];
let element = 5;

//Using IndexOf
if (arr.indexOf(element) !== -1) {
  console.log("number exists in an array ");
} else {
  console.log("not exists");
}

//Using Includes
if (arr.includes(element)) {
  console.log("number exists in an array ");
} else {
  console.log("not exists");
}
