// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

//Logic :
//1. create arrow function name arrayAvera
//2. initialize sum variable to 0
//3. check if array length is 0, if yes return 0
//4. loop through each number in the array and add it to sum
//5. finally return sum divided by array length to get average

let arrayAverage = (arr) => {
  let sum = 0;
  if (arr.length === 0) return 0;
  for (num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

let arr = [10, 20, 30, 40, 50];

console.log(arrayAverage(arr)); // Output: 30. 