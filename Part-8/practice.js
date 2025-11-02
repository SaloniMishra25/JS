let arr = [10, 20, 30, 50, 40];

// Check if all numbers are multiples of 10
// Logic:
// 1. Create an array
// 2. Use every() to test if all values are divisible by 10
// 3. Return boolean result

let res = arr.every((el) => el % 10 === 0);

console.log("All numbers are multiple of 10 :", res);
console.log("-------------------------");

// Create a function to find the min & max number in array
// Logic :
// 1. Create an array of numbers
// 2. Use reduce() to find min & max
// 3. Return single value

arr = [25, 45, 46, 7, 58];

let min = arr.reduce((min, num) => (min < num ? min : num));
let max = arr.reduce((max, num) => (max > num ? max : num));

console.log("Minimum Number in array:", min); // 7
console.log("Maximum Number in array:", max); // 58
console.log("-------------------------");
