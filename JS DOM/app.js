// Selecting DOM elements (use const)
const body = document.querySelector("body");
const heading = document.getElementById("heading");
const img = document.getElementById("mainImg");
const h2 = document.querySelector("h2");
const about = document.querySelector(".about");

// Changing heading text
heading.innerText = "My Portfolio";

// Updating about text
about.innerHTML = `
  Hi, I’m <b>Saloni Mishra.</b> 
  I am preparing to start my <b>career</b> in the <b>Tech industry</b> 
  and my goal is to crack interviews in top <b>MNCs.</b> 
  I am currently improving my technical skills and working on projects 
  to become <b>job-ready.</b>
`;

// Manipulating attribute
img.setAttribute("src", "assets/mainImg.png");

// Manipulating style
body.style.backgroundColor = "gray";
heading.style.color = "blue";
body.style.color = "black";

//ClassList
h2.classList.add("secondHeading");

//Navigation
console.log(body.children);
console.log(about.children);
console.log(about.previousElementSibling);
console.log(about.nextElementSibling);

//Adding Elements
let para = document.createElement("p");
let btn = document.createElement("button");

para.innerText = "Goal : Software Developer";
about.appendChild(para);

btn.innerText = "Download Resume";
about.appendChild(btn);

console.log(document.body); // to see where element is add




