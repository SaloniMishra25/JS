//Create a function that return a sum of numbers from 1 to n

function sumOfNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let res = sumOfNumbers(10);
console.log(`Sum of Numbers : ${res}`);
