let btn = document.querySelector("button");

console.dir(btn);

// btn.onclick = function () {
//   console.log("Button was clicked");
//   alert("Button was clicked");
// };
function sayHello() {
  alert("Hello");
}
btn.onclick = sayHello;

//EventListener
