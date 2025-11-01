// Question: Write a JavaScript function to extract unique characters from a string

//Logic :
// create string
// function to extract a unique char from string
//create one var to store uni char
//loop through string
// check if char is already in var if not add it to var
//return the var

let str = "aabbccccccccdeefg";

function extractUniqueCharacters(str) {
  let uniqueChars = "";
  for (let i = 0; i < str.length; i++) {
    if (!uniqueChars.includes(str[i])) {
      uniqueChars += str[i];
    }
  }
  return uniqueChars;
}

let res = extractUniqueCharacters(str);
console.log(res); // Output: "abcdefg"
