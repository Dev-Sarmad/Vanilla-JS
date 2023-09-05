// event deligation
/*when we have to apply the event on the elements repeatidly or by looping over then we use 
the event delegstion in which the parent element is selected for operation instead of all single element */

// selecting the individual element
const listItem = document.querySelectorAll('li');
// listItem.forEach((item)=> {
//   item.addEventListener('click',(e)=>{
//     e.target.remove();
//   })
// })

// selecting the parent element
const list =  document.querySelector('ul');
list.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.remove();
    return;
  }
})