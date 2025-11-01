//Create a function that prints ths multiplication table of a number

function printTable(num) {
  console.log(`Multiplication Table of ${num} is : `);

  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

printTable(5);
