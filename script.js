let list = document.getElementById('items');
// creating a element by DOM API  fisrt is to create any element and then append it into the parent div or any htmlNode
// example given below:
let div  =  document.createElement('div');
div.className = 'testingClass';
div.id= 'testingID';
let textdiv= document.createElement('h3');
textdiv.innerText = "testing heading";
div.appendChild(textdiv);
document.querySelector('.container').appendChild(div);

let item = document.createElement('li');
item.innerText = 'yellow';
list.appendChild(item);

