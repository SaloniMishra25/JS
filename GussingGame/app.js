const max = Number(prompt("Enter the Max number"));
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
  if (guess === "quit") {
    console.log("You quit");
    break;
  }
  
  guess = Number(guess);

  if (guess === random) {
    console.log("Correct Guess!");
    break;
  } else if (guess < random) {
    guess = prompt("Too small! Try again");
  } else {
    guess = prompt("Too high! Try again");
  }
}

console.log("Game Over!");
