// Question:
// Write a switch statement to print the months in a quarter.

// Quarter 1: January, February, March

// Quarter 2: April, May, June

// Quarter 3: July, August, September

// Quarter 4: October, November, December
// [Use the number as the case value in switch]



let quarter = 2;

switch (quarter) {
  case 1:
    console.log("JAN, FEB, MAR");
    break;
  case 2:
    console.log("APR, MAY, JUNE");
    break;
  case 3:
    console.log("JULY, AUG, SEPT");
    break;
  case 4:
    console.log("OCT, NOV, DEC");
    break;
  default:
    console.log("Quarter not avaible");
}
