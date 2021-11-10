import "./style.scss";

//SIGN-UP FORM
import { submitForm } from "./modules/sign-up-form";

document.querySelector("#first-modal button[type=submit]").addEventListener("click", submitForm);

// FILTER
import { hideAndUnhideFilterAndQuiz } from "./modules/filter-quiz-toggle";
import { setupLocalStorageItem, readFilterButtons } from "./modules/filter";
// import { setupLocalStorageItem } from "./modules/quiz";

hideAndUnhideFilterAndQuiz();
setupLocalStorageItem();
getUserFilterSelection();

function getUserFilterSelection() {
  document.querySelector("form.filter button[type=submit]").addEventListener("click", readFilterButtons);
}
