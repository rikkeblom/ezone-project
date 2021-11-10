export function setupLocalStorageItem() {
  let filters = {
    handEyeCoordination: false,
    reactionTime: false,
    hearing: false,
    vision: false,
    communication: false,
    multitasking: false,
    mindset: false,
    nutrition: false,
    injuries: false,
    technology: false,
    physiology: false,
    sleep: false,
    stress: false,
    tactical: false,
    strategy: false,
    leadership: false,
  };
  console.log("setup localStorage with filters: ", filters);

  let filterString = JSON.stringify(filters);
  localStorage.setItem("filters", filterString);
}

function getLocalStorageItem() {
  const filterString = localStorage.getItem("filters");
  let filterObject = JSON.parse(filterString);
  console.log(filterObject);
}

export function readFilterButtons(e) {
  e.preventDefault();
  getLocalStorageItem();
  const selectedFilters = document.querySelectorAll(`input[name="interest"]:checked`);
  if (selectedFilters.length > 0) {
    selectedFilters.forEach((filter) => {
      console.log("user chose:", filter.id);
    });
  } else {
    console.log("no filters selected");
  }

  // let filterLocalStorage = JSON.stringify(filterObject);
  // localStorage.setItem("filters", filterLocalStorage);
}
