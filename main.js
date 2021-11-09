import "./style.scss";
import { readCheckboxes, setupLocalStorageItem, nextQuestion, previousQuestion } from "./modules/quiz.js";

setupLocalStorageItem();
document.querySelector(".question1 button:last-of-type").addEventListener("click", readCheckboxes);

document.querySelector(".question1 button:last-of-type").addEventListener("click", nextQuestion);

document.querySelector(".question2 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question3 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question4 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question5 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question6 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question7 button:first-of-type").addEventListener("click", previousQuestion);
document.querySelector(".question8 button:first-of-type").addEventListener("click", previousQuestion);
