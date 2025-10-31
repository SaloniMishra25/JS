// Qs2. Write a JS program to find the number of digits in a number.
// Example:
// number = 287152 → count = 6

let number = 287152;

let count = 0;

while (number > 0) {
  number = Math.floor(number / 10);
  count++;
}
console.log("total cound ", count);
