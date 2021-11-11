export function hideCurrentModalAndUnhideNext() {
  const ancestorContainer = this.closest(".modal-page-container");
  ancestorContainer.classList.remove("active");
  ancestorContainer.nextElementSibling.classList.add("active");
}

export function openModal(e) {
  document.querySelector(".modal-container").classList.remove("hidden");
}

export function closeModal(e) {
  e.preventDefault();
  document.querySelector(".modal-container").classList.add("hidden");
}
