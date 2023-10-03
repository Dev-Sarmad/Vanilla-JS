const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({name: "sarmad", message:"this is alpha "});
    } else {
       `${reject("something went wrong")}`;
    }
  }, 2000);
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
console.log("promise is resolving....");
