let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener("click", async () => {
  p.innerText = "⏳ Getting a cute cat fact...";
  let fact = await getFacts();
  p.innerText = fact;
});

async function getFacts(){
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "No fact found. Try again!";
  }
}
