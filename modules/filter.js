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
  return filterObject;
}

export function readFilterButtons(e) {
  e.preventDefault();
  let filterObject = getLocalStorageItem();
  const selectedFilters = document.querySelectorAll(`input[name="interest"]:checked`);

  if (selectedFilters.length > 0) {
    selectedFilters.forEach((filter) => {
      const filterId = filter.id;
      filterObject[filterId] = true;
    });
  } else {
    console.log("no filters selected");
  }
  const filterLocalStorage = JSON.stringify(filterObject);
  localStorage.setItem("filters", filterLocalStorage);
}
