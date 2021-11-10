import "./style.scss";

//SIGN-UP FORM
import { submitForm } from "./modules/sign-up-form";

document.querySelector("#first-modal button[type=submit]").addEventListener("click", submitForm);

// FILTER
import { hideAndUnhideFilterAndQuiz } from "./modules/filter-quiz-toggle";
import { readFilterButtons, setupLocalStorageItemFilter } from "./modules/filter";
// import { setupLocalStorageItem } from "./modules/quiz";

hideAndUnhideFilterAndQuiz();
setupLocalStorageItemFilter();
getUserFilterSelection();

function getUserFilterSelection() {
  document.querySelector("form.filter button[type=submit]").addEventListener("click", readFilterButtons);
}

import { readCheckboxes, nextQuestion, previousQuestion } from "./modules/quiz.js";

// setupLocalStorageItem();
document.querySelector(".question1 button:last-of-type").addEventListener("click", readCheckboxes);

document.querySelector(".question1 button:last-of-type").addEventListener("click", nextQuestion);

document.querySelector(".question2 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question3 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question4 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question5 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question6 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question7 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question8 button:first-of-type").addEventListener("click", previousQuestion);
