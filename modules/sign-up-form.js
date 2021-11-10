//delegate tasks
export function submitForm(e) {
  e.preventDefault();
  const form = document.querySelector("#first-modal form");
  const allInputs = document.querySelectorAll("#first-modal input");
  allInputs.forEach((input) => {
    const inputValidity = input.checkValidity();
    const errorMessage = input.parentElement.lastElementChild;
    if (inputValidity === true) {
      errorMessage.style.visibility = "hidden";
    } else {
      errorMessage.style.visibility = "visible";
    }
    input.addEventListener("input", () => {
      const inputIsValid = validateInput(input);
      if (inputIsValid === false) {
        errorMessage.style.visibility = "visible";
      } else {
        errorMessage.style.visibility = "hidden";
      }
    });
  });
  const formIsValid = validateForm(form);
  if (formIsValid === true) {
    validatePassword(e.target, form);
  } else {
    console.log("form is not valid!");
  }
}

function validateForm(form) {
  return form.checkValidity();
}

function validateInput(input) {
  return input.checkValidity();
}

//validate password (same as other)
function validatePassword(submitButton, form) {
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
