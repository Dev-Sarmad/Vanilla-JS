const form = document.querySelector("#item-form");
const formInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearButton = document.getElementById("clear");
const filter = document.getElementById("filter");

function displayItems() {
  let itemToLocalStorage = getItemFromLocalStorage();
  itemToLocalStorage.forEach((item) => addItemDOM(item));
  checkUI();
}

const onAddItemSubmit = (e) => {
  e.preventDefault();
  // validation of user input
  const input = formInput.value;
  if (input === "") {
    alert("Please enter a valid input");
    return;
  } else {
    // console.log(input);
  }
  // add items to DOM
  addItemDOM(input);
  // add item to localStorage
  itemToLocalStorage(input);
  checkUI();
  // for to reset the input
  formInput.value = "";
};

function addItemDOM(items) {
  // // creating new item
  const item = document.createElement("li");
  item.textContent = items;
  const button = createButton("remove-item btn-link text-red");
  item.appendChild(button);
  itemList.appendChild(item);
}

function itemToLocalStorage(item) {
  // for checking items in storageItem
  const itemToLocalStorage = getItemFromLocalStorage();
  // if (localStorage.getItem("items") === null) {
  //   itemToLocalStorage = [];
  // } else {
  //   itemToLocalStorage = JSON.parse(localStorage.getItem("items"));
  // }
  // add item to array
  itemToLocalStorage.push(item);
  // sending item to local storage in string format
  localStorage.setItem("items", JSON.stringify(itemToLocalStorage));
}

function getItemFromLocalStorage() {
  let itemToLocalStorage;
  if (localStorage.getItem("items") === null) {
    itemToLocalStorage = [];
  } else {
    itemToLocalStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemToLocalStorage;
}

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

function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeItem(e.target.parentElement.parentElement);
  }
}
const removeItem = (item) => {
  if (confirm("Are you sure you")) {
    // remove from the DOM
    item.remove();
    // remove from the local storage
    removeItemFromLocalStorage(item.textContent);
    checkUI();
  }
};
function removeItemFromLocalStorage(item) {
 let itemToLocalStorage = getItemFromLocalStorage();
 itemToLocalStorage = itemToLocalStorage.filter((i)=> i !==item)
 localStorage.setItem('items', JSON.stringify(itemToLocalStorage));
}
const clearItems = () => {
  itemList.remove();
  localStorage.removeItem('items');
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

form.addEventListener("submit", onAddItemSubmit);
itemList.addEventListener("click", onClickItem);
clearButton.addEventListener("click", clearItems);
filter.addEventListener("input", filterItem);
document.addEventListener("DOMContentLoaded", displayItems);

checkUI();
