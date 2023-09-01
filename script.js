const clearbtn = document.querySelector("#clear");
const items = document.querySelectorAll(".items");
const removeAll = () => {
  items.forEach((item) => item.remove());
};
clearbtn.addEventListener("click", removeAll);
