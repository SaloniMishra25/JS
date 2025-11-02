//Square and sum the array elements using arrow function, then find average

let arr = [2, 4, 6, 8];

let squared = arr.map(num => num * num); // square each element

let sum = squared.reduce((total, num) => total + num, 0); // sum squares

let avg = sum / arr.length; // average

console.log("Squared:", squared);
console.log("Sum:", sum);
console.log("Average:", avg);


