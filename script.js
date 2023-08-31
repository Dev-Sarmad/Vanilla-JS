const replaceFirstItem = () => {
  let firstItem = document.querySelector("li:first-child");
  let replacedItem = document.createElement("li");
  replacedItem.innerText = "replacedItem";
  firstItem.replaceWith(replacedItem);
};

const replaceAll = () => {
  let lis = document.querySelectorAll(".item");
  lis.forEach((item, index) =>
    index === 1
      ? (item.innerText = "replacedSecond")
      : (item.innerText = "replaceAll")
  );
};
replaceAll();
// replaceFirstItem();
