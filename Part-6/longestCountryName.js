// Question:  Write a JavaScript function that accepts a list of country names and returns the longest country name.

//Logic :
// 1. create a array of country Name
// 2. create a function to find a largest country name
// 3. create a var to stor a largest country name
// 4. loop through the arra
// 5. check if the current country name lenght is greater than the largest counter name length
// 6. if true then update the largest country name var
// 7 return the largest country name varibale

let country = ["india", "unites states", "australia", "south africa"];

function findLargestCountryName(country) {
  let largestCountryName = "";

  for (let i = 0; i < country.length; i++) {
    if (country[i].length > largestCountryName.length) {
      largestCountryName = country[i];
    }
  }
  return largestCountryName;
}

let largesrCountry = findLargestCountryName(country);
console.log(largesrCountry); // Output: "unites states"
