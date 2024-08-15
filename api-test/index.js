const catBtn = document.getElementById("catbtn");

const fetching = async () => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const data = await response.json();
  console.log(data);
  data.forEach((e) => {
    const div = document.createElement("div");
    div.classList.add("catInfo");
    div.innerHTML = `<img src=${e.url} alt="" width=300>
    <h3>catid</h3>`;
    document.querySelector("#container").appendChild(div);
  });
};

catBtn.addEventListener("click", fetching);
