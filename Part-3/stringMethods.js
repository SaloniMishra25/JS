// String Methods
// ====================

let name = "     Saloni Mishra     ";
let str = "Software Developer";

// 1. Trim Methods
let newname = name.trim(); //create a newString

console.log("Before : ",name);
console.log("After Trim : ", newname);

// 2. toLowerCase Method
console.log("LowerCase : ", str.toLowerCase());

// 3. toUpperCase Method
console.log("Uppercase : ", str.toUpperCase());

//4. indexOf Method()
console.log("Index of : ", str.indexOf("Developer"));


//Method Chaining
console.log("Method Chaineing : ", str.toUpperCase().trim());

//Slice Method
console.log(str.slice(8)); //Mishra
console.log(str.slice(0,8)); //Saloni
console.log(str.slice(0, str.length-1)) //Saloni Mishra
console.log(str.slice(-2)); //er

//replace Method
console.log(str.replace("Software Developer", "Full Stack Developer "));

//repeat Method
console.log("Repeat : ", str.repeat(2));

