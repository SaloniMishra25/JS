//Multiplication Table

let n = 2;
//First Option
for (let i = n; i <= n * 10; i += n) {
  console.log(i);
}

// //Second Option
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

