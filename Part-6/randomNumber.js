//Write a JavaScript function to generate a random number within a range (start, end).

//Logic :
//1.  create a function to genrate a random number within a range
//2. use Math.random() to genrate a random number
//3. use Math.floor() to remove the decimal part
//4. return the randome number

function genrateRandomNumber(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}

let res = genrateRandomNumber(10, 20);
console.log(res);
