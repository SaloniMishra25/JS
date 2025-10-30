// Question:
// Write a program to check if 2 numbers have the same last digit.
// Example: 32 and 47852 have the same last digit i.e. 2.

let num1=32;
let num2=4785324;

if((num1%10) == (num2%10)) {
    console.log("number have the same last digist whic is ", num1%10);
}else{
    console.log("numbers don't have the same last digit")
}