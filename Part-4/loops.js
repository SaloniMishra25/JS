//Loops

// For Loop

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("---------------");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

//Nested Loops

for (let i = 1; i <= 3; i++) {
  console.log("Outer Loops : ", i);
  console.log("--------------");
  for (let j = 1; j <= 3; j++) {
    console.log("Inner Loops : ", j);
  }
}
console.log("--------------");

//While Loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("--------------");

//Break Keyword

for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i == 3) {
    break;
  }
}
console.log("--------------");
let n = 1;
while (n <= 5) {
  console.log(n);
  if (n == 3) {
    break;
  }
  n++;
}
