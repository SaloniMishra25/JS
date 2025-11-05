const API = "https://universities.hipolabs.com/search?country=";

let countryInput = document.querySelector("#country");
let btn = document.querySelector("#searchBtn");
let resultBox = document.querySelector("#result");

async function getUniversities() {
  let country = countryInput.value.trim();

  if (!country) {
    resultBox.innerHTML = " Please enter country name";
    return;
  }

  resultBox.innerHTML = "Loading...";

  try {
    let res = await axios.get(API + country);
    let data = res.data;

    if (data.length === 0) {
      resultBox.innerHTML = " No universities found";
      return;
    }

    resultBox.innerHTML = "";

    data.forEach((uni) => {
      let div = document.createElement("div");
      div.className = "university";
      div.innerHTML = `
        <strong>${uni.name}</strong>, Country: ${uni.country}<br>
      `;
      resultBox.appendChild(div);
    });
  } catch (err) {
    console.log(err);
    resultBox.innerHTML = "Error fetching data";
  }
}

btn.addEventListener("click", getUniversities);
