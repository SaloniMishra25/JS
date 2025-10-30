// Question:
// Write a JavaScript program to get the last n elements of an array.
// Example:
// For array [7, 9, 0, -2] and n = 3, print:
// [9, 0, -2]

let arr = [7, 9, 0, -2];
let n =3;

//Using Slice Method
let newarr = arr.slice(arr.length-n);
console.log(newarr);

//Using Splice Method
console.log(arr.splice(arr.length-n))