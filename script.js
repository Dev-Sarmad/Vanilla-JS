const clearButton = () => {
  let button = document.querySelector("button");
  button.remove();
};

const clearFirstElement = () => {
  // first select the parent element
  let ul = document.querySelector("ul");
  let li = document.querySelector("li:first-child");
  ul.removeChild(li);
};

const removeItem = (itemNumber) => {
  let ul = document.querySelector("ul");
  let li = document.querySelectorAll("li")[itemNumber - 1];
  ul.removeChild(li);
};
const removeItem2  = (itemNumber) => {
    let li = document.querySelectorAll("li");
li[itemNumber-1].remove();
}
removeItem2(1)
// removeItem(4);
// clearFirstElement();
// clearButton();
