let a = 10;
let b = 250;
let c = 30;

if (a > b) {
  if (a > c) {
    console.log(a, "a is largest");
  } else console.log(c, "c is largest");
} else {
  if (b > c) {
    console.log(b, "b is largest");
  } else {
    console.log(c, " c is largest");
  }
}
