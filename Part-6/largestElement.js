//WAP that returns array elements larger than a number

function largerThen(arr, num) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}

let arr = [10, 25, 30, 45, 60, 75, 90];
let num = 75;
largerThen(arr, num);
