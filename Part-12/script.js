//API - Application Programming interface

//Our first Request

let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("I'm learning JS");

//Using async/await

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (e) {
    console.log(e);
  }
  console.log("Bye");
}

//Axios - Library to make
async function getFacts() {
  try {
    let res = await axios.get(url);
    console.log(res.data.fact);
  } catch (e) {
    console.log(e);
  }
}

//let's understand with example
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);

  let p = document.querySelector("#result");
  p.innerText = fact;
});

async function getFacts() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log(e);
     return "No fact found";
  }
}
