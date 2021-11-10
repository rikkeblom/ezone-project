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
