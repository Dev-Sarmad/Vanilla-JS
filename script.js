let list = document.getElementById('items');
output  = list.children;
list.children[0].innerText = 'testing ';
list.firstElementChild.style.color= 'orange';
list.lastElementChild.style.color= 'red';

let  child  =  document.querySelector('.item');
output = child.parentElement;
child.parentElement.style.marginTop = '10px';
console.log(output);
