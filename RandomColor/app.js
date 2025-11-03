// Select elements once
const btn = document.querySelector("button");
const heading = document.querySelector("h1");
const box = document.querySelector("div");

// Event listener
btn.addEventListener("click", () => {
  const newColor = getRandomColor();
  heading.innerText = newColor;
  box.style.backgroundColor = newColor;
});

// Function to generate random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
