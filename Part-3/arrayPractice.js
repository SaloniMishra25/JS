//Array
let students = ["Saloni", "Aashi", "Jahnvi"];
let info = ["Saloni", 22, "Software Developer"]; //collection of different types of items

console.log(students);
console.log(students.length);
console.log(typeof students); //Object

console.log(info);

students[1] = "jahnvi"; //chnages made in original array

console.log(students); //Arrays are Mutable

//Arrays Methods
// 1. Push - Add to end
// 2. Pop - delete from end and return it
// 3. Unshift - add to start.
// 4.  Shift - delete from start and return it

let list = ["orange", "litchi"];
console.log("Original");
console.log("---------------");
console.log(list);

list.push("apple"); // Push - Add to end
list.unshift("Banana"); // Unshift - add to start.

console.log("ADD ");
console.log("---------------");
console.log(list);

console.log("Remove");
console.log("---------------");
list.pop();
list.shift();
console.log(list);
console.log("=======================================");

//IndexOf Method = return index of something
//includes = search for a value (returns boolen output)
let color = ["red", "yellow", "green", "pink"]; 

console.log("IndexOf : ", color.indexOf("yellow")); //IndexOf 
console.log("Answer: ", color.includes("yellow")); //Includes
console.log("=======================================");


//concatination - merge 2 arrays
let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];
let newNum = num1.concat(num2); //Concat

console.log("Num1 : ", num1);
console.log("Num2 : ",num2);
console.log("NewNum : ",newNum);

//reverse - reverse an array
let revNum = newNum.reverse()
console.log(revNum);
console.log(newNum); // Reverse method changed original array also
console.log("=======================================");



//Slice Method - copies a portion of an array
let cars = ["audi", "xuv", "bmw"];

console.log(cars.slice()); //all print
console.log(cars.slice(2)); //bmw
console.log(cars.slice(0,2)); // audi, xuv
console.log(cars.slice(-2))
console.log("=======================================");


//Splice - remove/add/replace. delete element in place
let number = [1,2,3,4,5];

console.log(number.splice(4, 1));
console.log(number)

console.log(number.splice(3,0, "2", "3"));
console.log(number)
console.log("=======================================");

//Sort - sorts an array
let char = ['d', 'e', 'b', 'c', 'a', 'f']
console.log("\n Sorted Array : ",char.sort());
console.log("=======================================\n");



//nested Array
let arr  = [[1,2], [3,4], [5,6]]
console.log(arr[1][1]);
