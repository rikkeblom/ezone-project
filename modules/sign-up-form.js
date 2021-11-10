//delegate tasks
export function submitForm(e) {
  e.preventDefault();
  validatePassword(e.target);
}

//validate password (same as other)
function validatePassword(submitButton) {
  const form = document.querySelector("#first-modal form");
  console.log(form.elements);
  const firstPassword = form.elements.password.value;
  const secondPassword = form.elements.repeatPassword.value;
  const repeatPasswordValidationMessage = document.querySelector("#password-container .requirements");
  if (firstPassword === secondPassword) {
    saveUserInfoInLocalStorage(form);
    openNextStep(submitButton);
    repeatPasswordValidationMessage.style.visibility = "hidden";
  } else {
    console.log("passwords don't match");
    repeatPasswordValidationMessage.style.visibility = "visible";
  }
}

function saveUserInfoInLocalStorage(form) {
  let userObject = {
    username: "",
    email: "",
    password: "",
  };

  userObject.username = form.elements.username.value;
  userObject.email = form.elements.email.value;
  userObject.password = form.elements.password.value;

  const userLocalStorage = JSON.stringify(userObject);
  localStorage.setItem("user", userLocalStorage);
}

//open next page
function openNextStep(submitButton) {
  const ancestorContainer = submitButton.closest(".modal-page-container");
  ancestorContainer.classList.remove("active");
  ancestorContainer.nextElementSibling.classList.add("active");
}
