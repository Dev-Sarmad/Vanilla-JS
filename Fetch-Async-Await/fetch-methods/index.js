const createPost = ({ title, body }) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    //posting data to the server
    body: JSON.stringify({
      name: title, //title and body are coming from the server.
      description: body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "1234",
    },
  })
    .then((res) => res.json()) 
    .then((data) => console.log(data));
};
createPost({ title: "homecoming", body: "welcome to the UnitedStates" }); //now data is posted on the server.
