let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  document.querySelector("h2").innerText = `Level ${level}`;

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let btn = document.getElementById(randomColor);

  gameSeq.push(randomColor);
  flash(btn);
}

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("user-flash");
  setTimeout(() => {
    btn.classList.remove("user-flash");
  }, 300);
}

let allBtns = document.querySelectorAll(".btn");
allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let color = btn.id;
    userSeq.push(color);
    userFlash(btn);
    checkAns(userSeq.length - 1);
  });
});

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    gameOver();
  }
}

function gameOver() {
  document.querySelector("h2").innerHTML = `Game Over! Press any key to restart<br>Score: ${level}`;
  document.body.style.background = "red";
  setTimeout(() => {
    document.body.style.background = "white";
  }, 200);

  resetGame();
}

function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
