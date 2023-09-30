const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const getJokes = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,sexist"
  );
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).setup;
        jokeEl.innerHTML = JSON.parse(this.responseText).delivery;
      } else {
        jokeEl.innerHTML = "erorrr";
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener("click", getJokes);
document.addEventListener("DOMContentLoaded", getJokes);
