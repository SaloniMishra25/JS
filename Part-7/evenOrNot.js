//Write an arrow function named isEven() that takes a single number as argument and returns whether it is even or not.

//Logic:
//1. create arrow function name isEven
//2. use modules opertro to check number is even or not
//3 if number % 2 is 0 return true else return false

let isEven = (num) => {
  return num % 2 == 0;
};
console.log(isEven(4)); //Output : true
console.log(isEven(7)); //Output : false
