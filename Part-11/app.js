// JavaScript Asynchronous Concepts

//----------Call Stack Demo---------------
function a() {
  console.log("Inside A");
  b(); // Calling function B
}
function b() {
  console.log("Inside B");
  c(); // Calling function C
}
function c() {
  console.log("Inside C");
}
a(); // Execution starts here

//------------Callback Hell Example (setTimeout + DOM)----------------
// Selecting H1 element
let h1 = document.querySelector("h1");
h1.style.color = "blue";

// Changing color multiple times using callback pattern
setTimeout(() => (h1.style.color = "red"), 1000);
setTimeout(() => (h1.style.color = "yellow"), 2000);
setTimeout(() => (h1.style.color = "green"), 3000);

//-------- Better version using reusable function--------------
let h2 = document.querySelector("h2");
function changeColor(element, color, delay) {
  setTimeout(() => {
    element.style.color = color;
  }, delay);
}
changeColor(h2, "red", 1000);
changeColor(h2, "yellow", 2000);
changeColor(h2, "green", 3000);

//---------Callback Hell Example (Nested Callbacks)------------------------------------
let para = document.querySelector("p");
function changeColorNested(element, color, delay, next) {
  setTimeout(() => {
    element.style.color = color;
    if (next) next();
  }, delay);
}

// Nested callback structure (callback hell)
changeColorNested(para, "red", 1000, () => {
  changeColorNested(para, "yellow", 1000, () => {
    changeColorNested(para, "green", 1000);
  });
});

// ---------------------Promises Concept------------------

// Without Promises
function saveToDbSimple(data) {
  let speed = Math.floor(Math.random() * 10) + 1;
  speed > 4 ? console.log(`${data}: Saved`) : console.log(`${data}: Failed`);
}
saveToDbSimple("Saloni");

// With Callbacks (Callback style)
function saveToDb(data, success, failure) {
  let speed = Math.floor(Math.random() * 10) + 1;
  speed > 4 ? success() : failure();
}

saveToDb(
  "User1",
  () => {
    console.log("User1 saved");
    saveToDb(
      "User2",
      () => {
        console.log("User2 saved");
      },
      () => console.log("User2 failed")
    );
  },
  () => console.log("User1 failed")
);

// Promise Version
function saveToDbPromise(data) {
  return new Promise((resolve, reject) => {
    let speed = Math.floor(Math.random() * 10) + 1;
    speed > 4
      ? resolve(`${data} saved successfully`)
      : reject(`${data} save failed`);
  });
}

saveToDbPromise("Saloni")
  .then((res) => {
    console.log(res);
    return saveToDbPromise("Software Developer");
  })
  .then((res) => {
    console.log(res);
    return saveToDbPromise("Frontend Developer");
  })
  .then((res) => console.log(res))
  .catch((err) => console.log("Error:", err));
