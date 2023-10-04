function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => displayUser(data.results[0]));
}

function displayUser(user) {
  const userDisplay = document.querySelector(".user");

  console.log(user.gender);
  if (user.gender === "female") {
    document.body.style.background = "red";
  } else {
    document.body.style.background = "green";
  }
  userDisplay.innerHTML = `
<img src="${user.picture.thumbnail}" alt="" style="width: 50px;">
<h3>${user.name.first}</h3>
<h4>${user.email}</h4>
<p>${user.location.timezone.description}</p>
<h4>${user.phone}</h4>
<h4>${user.location.city} ${user.location.country}</h4>
`;
}

document.querySelector("#generate").addEventListener("click", fetchUser);
fetchUser();
