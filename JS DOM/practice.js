// DOM Practice

// selecting body & container
let body = document.querySelector("body");
let container = document.querySelector(".container");

// create a para with red color
let para = document.createElement("p");
para.innerHTML = "<b>Hey I'm red!</b>";
para.classList.add("red");
container.append(para);

// create an h3 element with blue color
let h3 = document.createElement("h3");
h3.innerHTML = "<b>Hey, I'm Blue</b>";
h3.classList.add("blue");
container.append(h3);

// create a new div (pink box)
let box = document.createElement("div");
box.classList.add("box");
container.append(box);

// create h1 and p inside box
let h1 = document.createElement("h1");
h1.innerHTML = "I'm in div <br/>";

let p = document.createElement("p");
p.innerText = "Me TOO!";

box.append(h1);
box.append(p);

// create input & button
let input = document.createElement("input");
let btn = document.createElement("button");

body.append(input, btn);

// button text & id
btn.innerText = "Click me";
btn.setAttribute("id", "btn");

// input placeholder
input.setAttribute("placeholder", "username");

// select button using id & style it
let button = document.querySelector("#btn");
button.style.backgroundColor = "blue";
button.style.color = "white";

// create a new h1
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<u>DOM Practice</u>";
newHeading.style.color = "purple";
body.append(newHeading);

// create new para
let newPara = document.createElement("p");
newPara.innerHTML = `Apna College <b>Delta</b> Practice`;
body.append(newPara);
