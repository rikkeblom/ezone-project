import "./style.scss";

//SIGN-UP FORM
import { validatePassword } from "./modules/sign-up-form";

document.querySelector("#first-modal button[type=submit]").addEventListener("click", validatePassword);

import { hideAndUnhideFilterAndQuiz } from "./modules/filter-quiz-toggle";

hideAndUnhideFilterAndQuiz();
