export function hideCurrentModalAndUnhideNext() {
  const ancestorContainer = this.closest(".modal-page-container");
  ancestorContainer.classList.remove("active");
  ancestorContainer.nextElementSibling.classList.add("active");
}
