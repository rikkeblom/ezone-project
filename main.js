import "./style.scss";

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
