import "./style.scss";

// import { filter } from "./modules/filter-quiz-toggle.js";

// console.log(filter);

hideAndUnhideFilterAndQuiz();

function hideAndUnhideFilterAndQuiz() {
  const filterQuizRadioBtns = document.querySelectorAll(`input[name="filter-quiz-radio"]`);
  filterQuizRadioBtns.forEach((btn) => {
    btn.onclick = function () {
      if (btn.value === "filter") {
        document.querySelector(`section.quiz-container`).classList.add("hidden");
        document.querySelector(`section.filter-container`).classList.remove("hidden");
      } else {
        document.querySelector(`section.filter-container`).classList.add("hidden");
        document.querySelector(`section.quiz-container`).classList.remove("hidden");
      }
    };
  });
}
