export function readFiltersFromLocalStorage() {
  let filterString = localStorage.getItem("filters");
  let filterObject = JSON.parse(filterString);

  //resetting the filters
  document.querySelector(".topic:nth-of-type(1)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(2)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(3)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(4)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(5)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(6)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(7)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(8)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(9)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(10)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(11)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(12)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(13)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(14)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(15)").classList.remove("hidden");
  document.querySelector(".topic:nth-of-type(16)").classList.remove("hidden");

  //adding filters based on local storage
  if (filterObject.handEyeCoordination === false) {
    console.log("remove handeye");
    document.querySelector(".topic:nth-of-type(1)").classList.add("hidden");
  }
  if (filterObject.reactionTime === false) {
    console.log("remove reaction");
    document.querySelector(".topic:nth-of-type(2)").classList.add("hidden");
  }
  if (filterObject.hearing === false) {
    console.log("remove hearing");
    document.querySelector(".topic:nth-of-type(3)").classList.add("hidden");
  }
  if (filterObject.tactical === false) {
    console.log("remove tactical");
    document.querySelector(".topic:nth-of-type(4)").classList.add("hidden");
  }
  if (filterObject.strategy === false) {
    console.log("remove strategy");
    document.querySelector(".topic:nth-of-type(5)").classList.add("hidden");
  }
  if (filterObject.leadership === false) {
    console.log("remove leadership");
    document.querySelector(".topic:nth-of-type(6)").classList.add("hidden");
  }
  if (filterObject.communication === false) {
    console.log("remove communication");
    document.querySelector(".topic:nth-of-type(7)").classList.add("hidden");
  }
  if (filterObject.multitasking === false) {
    console.log("remove multitasking");
    document.querySelector(".topic:nth-of-type(8)").classList.add("hidden");
  }
  if (filterObject.technology === false) {
    console.log("remove technology");
    document.querySelector(".topic:nth-of-type(9)").classList.add("hidden");
  }
  if (filterObject.mindset === false) {
    console.log("remove mindset");
    document.querySelector(".topic:nth-of-type(10)").classList.add("hidden");
  }
  if (filterObject.nutrition === false) {
    console.log("remove nutrition");
    document.querySelector(".topic:nth-of-type(11)").classList.add("hidden");
  }
  if (filterObject.vision === false) {
    console.log("remove vision");
    document.querySelector(".topic:nth-of-type(12)").classList.add("hidden");
  }
  if (filterObject.hearing === false) {
    console.log("remove hearing");
    document.querySelector(".topic:nth-of-type(13)").classList.add("hidden");
  }
  if (filterObject.injuries === false) {
    console.log("remove injuries");
    document.querySelector(".topic:nth-of-type(14)").classList.add("hidden");
  }
  if (filterObject.physiology === false) {
    console.log("remove physiology");
    document.querySelector(".topic:nth-of-type(15)").classList.add("hidden");
  }
  if (filterObject.sleep === false) {
    console.log("remove sleep");
    document.querySelector(".topic:nth-of-type(16)").classList.add("hidden");
  }

  sendDatatoDatase();
}

function sendDatatoDatase() {
  let filterString = localStorage.getItem("user");
  let filterObject = JSON.parse(filterString);

  let payload = {
    username: filterObject.username,
    email: filterObject.email,
    password: filterObject.password,
    filters: localStorage.getItem("filters"),
    games: "",
  };

  fetch("https://keafs-8b71.restdb.io/rest/ezone-users", {
    method: "POST",
    headers: {
      "x-apikey": "602e39f15ad3610fb5bb62c6",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}
