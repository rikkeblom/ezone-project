//validate password (same as other)
export function validatePassword(e) {
  e.preventDefault();
  const form = document.querySelector("#first-modal form");
  console.log(form.elements);
  const firstPassword = form.elements.password.value;
  const secondPassword = form.elements.repeatPassword.value;
  const repeatPasswordValidationMessage = document.querySelector("#password-container .requirements");
  if (firstPassword === secondPassword) {
    saveUserInfoInLocalStorage(form);
    repeatPasswordValidationMessage.style.visibility = "hidden";
  } else {
    console.log("passwords don't match");
    repeatPasswordValidationMessage.style.visibility = "visible";
  }
}

//save form content in localStorage by clicking button
function saveUserInfoInLocalStorage(form) {
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
