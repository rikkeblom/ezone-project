//validate password (same as other)

//save form content in localStorage by clicking button
export function saveUserInfoInLocalStorage(e) {
  e.preventDefault();
  const form = document.querySelector("#first-modal form");
  console.log(form.elements.username.value);
  let userObject = {
    username: "",
    email: "",
    password: "",
  };

  userObject.username = form.elements.username.value;
  userObject.email = form.elements.email.value;
  userObject.password = form.elements.password.value;

  console.log(userObject);

  //localStorage
  const userLocalStorage = JSON.stringify(userObject);
  localStorage.setItem("user", userLocalStorage);
}

//open next page
