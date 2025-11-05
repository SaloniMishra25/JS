//Async & Await

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 4) {
        reject("Promise Rejected");
      }
      h1.style.color = color;
      console.log(`color chnages to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("green", 1000);
  } catch (err) {
    console.log("Error caught");
    console.log(err);
  }

  console.log("Congratulation!, you got a placement in Google");
}
