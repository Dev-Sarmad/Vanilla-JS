// first initialize the xhml variable
const xhr = new XMLHttpRequest();

// describe the https resquest method
xhr.open("GET", "https://api.github.com/users/Dev-Sarmad/repos");

//examine the readystatechange

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      let li = document.createElement("li");
      li.innerHTML = repo.name;
      document.body.appendChild(li);
    });
  }
};

// Now send the request to server.
xhr.send();
