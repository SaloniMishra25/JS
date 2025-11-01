//Create a function that returns a concatenation of all string in array

function concatenateString(arr) {
  let result = ``;

  for (let i = 0; i <= arr.length - 1; i++) {
    result += arr[i];
  }
  return result;
}

let res = concatenateString(["Hello", " ", "I'm", " ", "Saloni Mishra"]);

console.log(`Concatenoted String : ${res}`);
