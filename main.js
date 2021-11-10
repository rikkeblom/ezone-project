import "./style.scss";

// FILTER
import { hideAndUnhideFilterAndQuiz } from "./modules/filter-quiz-toggle";
import { setupLocalStorageItem } from "./modules/filter";

hideAndUnhideFilterAndQuiz();
setupLocalStorageItem();
