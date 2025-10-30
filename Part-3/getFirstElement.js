// Question:
// Write a JavaScript program to get the first n elements of an array.
// Example:
// For array [7, 9, 0, -2] and n = 3, print:
// [7, 9, 0]

let arr = [7, 9, 0, -2];
let n =3;

//Using Slice method
let ans = arr.slice(0, n);
console.log(ans);

//using Splice Method
arr.splice(n);
console.log(arr);
