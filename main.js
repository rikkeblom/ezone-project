import "./style.scss";

//SIGN-UP FORM
import { submitForm } from "./modules/sign-up-form";

document.querySelector("#first-modal button[type=submit]").addEventListener("click", submitForm);

import { hideAndUnhideFilterAndQuiz } from "./modules/filter-quiz-toggle";

hideAndUnhideFilterAndQuiz();
