 let url = "https://icanhazdadjoke.com/";
    let btn = document.querySelector("button");
    let para = document.querySelector("p");

    btn.addEventListener("click", async () => {
      para.innerText = "⏳ Loading joke...";
      let joke = await getJokes();
      para.innerText = joke;
    });

    async function getJokes() {
      try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(url, config);
        return res.data.joke;
      } catch (e) {
        return "❌ No Joke Found, Try Again!";
      }
    }