let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let link = await getImage();

  let img = document.querySelector("img");
  img.setAttribute("src", link);
  console.log(link);
});

async function getImage() {
  try {
    let res = await axios.get(url);
    console.log(res.data.message);
    return res.data.message;
  } catch (e) {
    console.log(e);
    return "No Image found";
  }
}
