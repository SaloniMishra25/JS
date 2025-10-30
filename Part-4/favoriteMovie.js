const favMovie = "Jab We Met";

let guess = prompt("Guess my Favorite Movie ");

while (guess != favMovie) {
  if (guess == "quit") {
    break;
  }
  console.log("Wrong!");
  guess = prompt(" Wrong Guess, Please try again. ");
}

if (guess == favMovie) {
  console.log("Congrats! ");
}
