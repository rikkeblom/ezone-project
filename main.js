import "./style.scss";

//SIGN-UP FORM
import { saveUserInfoInLocalStorage } from "./modules/sign-up-form";

document.querySelector("#first-modal button[type=submit]").addEventListener("click", saveUserInfoInLocalStorage);

import { hideAndUnhideFilterAndQuiz } from "./modules/filter-quiz-toggle";

hideAndUnhideFilterAndQuiz();
