function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(response => response.json())
    .then(object => {
      const body = document.querySelector("body");
      const newDiv = document.createElement("div");
      newDiv.textContent = object.id;
      body.appendChild(newDiv);
    })
    .catch(error => {
      const body = document.querySelector("body");
      const errorDiv = document.createElement("div");
      errorDiv.textContent = error.message;
      body.appendChild(errorDiv);
    });
}
