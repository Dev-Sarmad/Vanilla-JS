const form = document.querySelector("#item-form");
const formInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const clearButton  = document.getElementById('clear')
const addItem = (e) => {
  e.preventDefault();
  // validation of user input
  const input = formInput.value;
  if (input === "") {
    alert("Please enter a valid input");
    return;
  } else {
    console.log(input);
  }
  // creating new item
  const item = document.createElement("li");
  item.innerHTML = input;
  const button = createButton("remove-item btn-link text-red");
  item.appendChild(button);
  itemList.appendChild(item);
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

const  removeItem = (e) => {
  if(e.target.parentElement.classList.contains('remove-item')){
    e.target.parentElement.parentElement.remove();
  }
}

const clearItems = ()=>{
  itemList.remove();
}

form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearButton.addEventListener("click",clearItems);
