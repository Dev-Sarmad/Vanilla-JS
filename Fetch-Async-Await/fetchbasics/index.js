// fetching from the files
fetch("./info.json")
  .then((response) => response.json()) //first the response is converted to JSON
  .then((data) => (document.querySelector('h1').textContent = data.name)); //then that response is returned
