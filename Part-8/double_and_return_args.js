//Q4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with:
// - original array values
// - all additional arguments doubled


function doubleAndReturnArgs(arr, ...args) {
  let doubled = args.map((el) => el * 2);
  return [...arr, ...doubled];
}

console.log(doubleAndReturnArgs([1, 2], 3, 4, 5));
// Output: [1, 2, 6, 8, 10]
