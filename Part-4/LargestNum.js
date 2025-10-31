// Qs5. Find the largest number in an array containing only positive numbers.

let arr = [23, 45, 67, , 234, 89, 12, 90, 34, 56];

let largestNum = 0;

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > largestNum) {
    largestNum = arr[i];
  }
}
console.log(`The largest number in the array is : ${largestNum}`);
