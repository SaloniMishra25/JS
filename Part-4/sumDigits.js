// Qs3. Write a JS program to find the sum of digits in a number.
// Example:
// number = 287152 → sum = 25

let num = 287152;
let sum = 0;

while (num > 0) {
  let lastDigit = num % 10;
  sum += lastDigit;
  num = Math.floor(num / 10);
}
console.log(sum);
