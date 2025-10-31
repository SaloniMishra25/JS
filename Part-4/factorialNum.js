// Qs4. Print the factorial of a number n.
// (Factorial of n = product of all positive numbers from 1 to n)
// Examples:
// 7! = 5040
// 5! = 120
// 3! = 6
// 0! = 1 (always)

let n = 7;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i;
}
console.log(fact);
