const form = document.querySelector("#item-form");
const formInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearButton = document.getElementById("clear");
const filter = document.getElementById("filter");
const addItem = (e) => {
  e.preventDefault();
  // validation of user input
  const input = formInput.value;
  if (input === "") {
    alert("Please enter a valid input");
    return;
  } else {
    // console.log(input);
  }
  // creating new item
  const item = document.createElement("li");
  item.textContent = input;
  const button = createButton("remove-item btn-link text-red");
  item.appendChild(button);
  itemList.appendChild(item);
  checkUI();
  // for to reset the input
  formInput.value = "";
};

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);
  return button;
}
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

const removeItem = (e) => {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("Are you sure you")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
};

const clearItems = () => {
  itemList.remove();
  checkUI();
};

function filterItem(e) {
  const items = itemList.querySelectorAll("li");
  let text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearButton.style.display = "none";
    filter.style.display = "none";
  } else {
    clearButton.style.display = "block";
    filter.style.display = "block";
  }
}

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearButton.addEventListener("click", clearItems);
filter.addEventListener("input", filterItem);

checkUI();
