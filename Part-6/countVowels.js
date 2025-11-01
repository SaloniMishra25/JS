// Question: Write a JavaScript function to count number of vowels in a string.

//Logic :
//1. create a string
//2. create a function to count vowels
//3. create a var to store count of vowels
//4. loop through the string
//5 check if the current char is vowel or not
//6. if true increment the count var and print the vowel
//7 return the count var

let str = "Good morning everyone";

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log("Total vowels:", countVowels(str)); // Total vowels: 7
