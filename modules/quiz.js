export async function readCheckboxes() {
  // console.log("function readCheckboxes");
  const selectedGames = document.querySelectorAll(".question1 input[type='checkbox']:checked");
  let filterString = localStorage.getItem("filters");
  let filterObject = JSON.parse(filterString);

  //resetting the affected filters incase someone goes back to this question and answers differently
  filterObject.handEyeCoordination = false;
  filterObject.reactionTime = false;
  filterObject.tactical = false;
  filterObject.strategy = false;
  filterObject.leadership = false;
  filterObject.communication = false;
  filterObject.multitasking = false;

  for (let i = 0; i < selectedGames.length; i++) {
    console.log(selectedGames[i].name);
    decideFiltersFromGame(selectedGames[i].name);

    function decideFiltersFromGame(game) {
      if (game === "FPS") {
        filterObject.handEyeCoordination = true;
        filterObject.reactionTime = true;
        filterObject.tactical = true;
        filterObject.strategy = true;
        filterObject.leadership = true;
      } else if (game === "MMORPG") {
        filterObject.communication = true;
        filterObject.strategy = true;
        filterObject.leadership = true;
      } else if (game === "sports") {
        filterObject.handEyeCoordination = true;
        filterObject.reactionTime = true;
        filterObject.strategy = true;
        filterObject.communication = true;
      } else if (game === "racing") {
        filterObject.handEyeCoordination = true;
        filterObject.reactionTime = true;
      } else if (game === "towerdefence") {
        filterObject.tactical = true;
        filterObject.strategy = true;
      } else if (game === "RTS") {
        filterObject.tactical = true;
        filterObject.strategy = true;
        filterObject.reactionTime = true;
      } else if (game === "simulation") {
        filterObject.multitasking = true;
      } else if (game === "roleplaying") {
        filterObject.communication = true;
        filterObject.strategy = true;
        filterObject.leadership = true;
      } else if (game === "adventure") {
        filterObject.multitasking = true;
        filterObject.handEyeCoordination = true;
        filterObject.reactionTime = true;
      } else if (game === "survival") {
        filterObject.tactical = true;
        filterObject.strategy = true;
        filterObject.reactionTime = true;
      } else if (game === "fighting") {
        filterObject.handEyeCoordination = true;
        filterObject.multitasking = true;
        filterObject.reactionTime = true;
        filterObject.tactical = true;
      } else if (game === "battleroyale") {
        filterObject.handEyeCoordination = true;
        filterObject.strategy = true;
        filterObject.reactionTime = true;
        filterObject.tactical = true;
      } else if (game === "rythm") {
        filterObject.handEyeCoordination = true;
        filterObject.reactionTime = true;
      } else if (game === "platform") {
        filterObject.handEyeCoordination = true;
        filterObject.strategy = true;
      }
    }
  }
  // console.log(filterObject);
  let filterLocalStorage = JSON.stringify(filterObject);
  localStorage.setItem("filters", filterLocalStorage);
}

export function readRadioButtons() {
  // console.log("readradiobuttons");
  let questionNumber;
  if (document.querySelector(".question2").classList.contains("hidden") != true) {
    questionNumber = "2";
  } else if (document.querySelector(".question3").classList.contains("hidden") != true) {
    questionNumber = "3";
  } else if (document.querySelector(".question5").classList.contains("hidden") != true) {
    questionNumber = "5";
  } else if (document.querySelector(".question6").classList.contains("hidden") != true) {
    questionNumber = "6";
  } else if (document.querySelector(".question8").classList.contains("hidden") != true) {
    questionNumber = "8";
  }
  // console.log("question " + questionNumber);

  let choice = document.querySelector(`.question${questionNumber} input[type='radio']:checked`).id;
  // console.log(choice);
  let filterString = localStorage.getItem("filters");
  let filterObject = JSON.parse(filterString);

  if (choice === "equipment") {
    filterObject.technology = true;
    filterObject.mindset = false;
    console.log("added technology");
  } else if (choice === "attitude") {
    filterObject.mindset = true;
    filterObject.technology = false;
    console.log("added attitude");
  } else if (choice === "yes3") {
    filterObject.stress = true;
    filterObject.nutrition = true;
    console.log("added stress and nutrition");
  } else if (choice === "no3") {
    filterObject.stress = false;
    filterObject.nutrition = false;
    console.log("removed stress and nutrition");
  } else if (choice === "yes5") {
    filterObject.vision = true;
    console.log("added vision");
  } else if (choice === "no5") {
    filterObject.vision = false;
    console.log("removed vision");
  } else if (choice === "yes6") {
    filterObject.hearing = true;
    console.log("added hearing");
  } else if (choice === "no6") {
    filterObject.hearing = false;
    console.log("removed hearing");
  } else if (choice === "yes8") {
    filterObject.injuries = true;
    console.log("added injuries");
  } else if (choice === "no8") {
    filterObject.injuries = false;
    console.log("removed injuries");
  } else {
    console.log("no new filters added or removed");
  }

  let filterLocalStorage = JSON.stringify(filterObject);
  localStorage.setItem("filters", filterLocalStorage);
}

export function readRange() {
  // console.log("function readCheckboxes");
  let filterString = localStorage.getItem("filters");
  let filterObject = JSON.parse(filterString);
  if (document.querySelector(".question4").classList.contains("hidden") != true) {
    let value = document.querySelector(".question4 input[type='range']").value;
    if (value < 6) {
      filterObject.sleep = true;
      console.log("added sleep");
    } else if (value > 9) {
      filterObject.sleep = true;
      console.log("added sleep");
    } else {
      filterObject.sleep = false;
      console.log("removed sleep");
    }
    console.log("you sleep " + value + " hours");
  } else if (document.querySelector(".question7").classList.contains("hidden") != true) {
    let value = document.querySelector(".question7 input[type='range']").value;
    if (value < 3) {
      filterObject.physiology = true;
      console.log("added physiology");
    } else {
      filterObject.physiology = false;
      console.log("removed physiology");
    }
    console.log("you exercise " + value + " hours per week");
  }
  let filterLocalStorage = JSON.stringify(filterObject);
  localStorage.setItem("filters", filterLocalStorage);
}

// export function setupLocalStorageItem() {
//   let filters = {
//     handEyeCoordination: false,
//     reactionTime: false,
//     hearing: false,
//     vision: false,
//     communication: false,
//     multitasking: false,
//     mindset: false,
//     nutrition: false,
//     injuries: false,
//     technology: false,
//     physiology: false,
//     sleep: false,
//     stress: false,
//     tactical: false,
//     strategy: false,
//     leadership: false,
//   };

//   let filterString = JSON.stringify(filters);
//   localStorage.setItem("filters", filterString);
// }

export function nextQuestion() {
  // console.log("next question please");
  if (document.querySelector(".question1").classList.contains("hidden") != true) {
    document.querySelector(".question1").classList.add("hidden");
    document.querySelector(".question2").classList.remove("hidden");
    document.querySelector(".question2 button:last-of-type").addEventListener("click", readRadioButtons);
    document.querySelector(".question2 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question2").classList.contains("hidden") != true) {
    document.querySelector(".question2").classList.add("hidden");
    document.querySelector(".question3").classList.remove("hidden");
    document.querySelector(".question3 button:last-of-type").addEventListener("click", readRadioButtons);
    document.querySelector(".question3 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question3").classList.contains("hidden") != true) {
    document.querySelector(".question3").classList.add("hidden");
    document.querySelector(".question4").classList.remove("hidden");
    document.querySelector(".question4 button:last-of-type").addEventListener("click", readRange);
    document.querySelector(".question4 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question4").classList.contains("hidden") != true) {
    document.querySelector(".question4").classList.add("hidden");
    document.querySelector(".question5").classList.remove("hidden");
    document.querySelector(".question5 button:last-of-type").addEventListener("click", readRadioButtons);
    document.querySelector(".question5 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question5").classList.contains("hidden") != true) {
    document.querySelector(".question5").classList.add("hidden");
    document.querySelector(".question6").classList.remove("hidden");
    document.querySelector(".question6 button:last-of-type").addEventListener("click", readRadioButtons);
    document.querySelector(".question6 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question6").classList.contains("hidden") != true) {
    document.querySelector(".question6").classList.add("hidden");
    document.querySelector(".question7").classList.remove("hidden");
    document.querySelector(".question7 button:last-of-type").addEventListener("click", readRange);
    document.querySelector(".question7 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question7").classList.contains("hidden") != true) {
    document.querySelector(".question7").classList.add("hidden");
    document.querySelector(".question8").classList.remove("hidden");
    document.querySelector(".question8 button:last-of-type").addEventListener("click", readRadioButtons);
  }
}

export function previousQuestion() {
  // console.log("previous question please");
  if (document.querySelector(".question2").classList.contains("hidden") != true) {
    document.querySelector(".question2").classList.add("hidden");
    document.querySelector(".question1").classList.remove("hidden");
  } else if (document.querySelector(".question3").classList.contains("hidden") != true) {
    document.querySelector(".question3").classList.add("hidden");
    document.querySelector(".question2").classList.remove("hidden");
    document.querySelector(".question2 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question4").classList.contains("hidden") != true) {
    document.querySelector(".question4").classList.add("hidden");
    document.querySelector(".question3").classList.remove("hidden");
    document.querySelector(".question3 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question5").classList.contains("hidden") != true) {
    document.querySelector(".question5").classList.add("hidden");
    document.querySelector(".question4").classList.remove("hidden");
    document.querySelector(".question4 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question6").classList.contains("hidden") != true) {
    document.querySelector(".question6").classList.add("hidden");
    document.querySelector(".question5").classList.remove("hidden");
    document.querySelector(".question5 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question7").classList.contains("hidden") != true) {
    document.querySelector(".question7").classList.add("hidden");
    document.querySelector(".question6").classList.remove("hidden");
    document.querySelector(".question6 button:last-of-type").addEventListener("click", nextQuestion);
  } else if (document.querySelector(".question8").classList.contains("hidden") != true) {
    document.querySelector(".question8").classList.add("hidden");
    document.querySelector(".question7").classList.remove("hidden");
    document.querySelector(".question7 button:last-of-type").addEventListener("click", nextQuestion);
  }
}

export function showRange() {
  console.log("showRange");
  if (document.querySelector(".question4").classList.contains("hidden") != true) {
    document.querySelector(".question4 .live-range").textContent = document.querySelector(".question4 input[type=range]").value;
  } else if (document.querySelector(".question7").classList.contains("hidden") != true) {
    document.querySelector(".question7 .live-range").textContent = document.querySelector(".question7 input[type=range]").value;
  }
}
