"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Iterate over all elements with class "show-modal" and access the textContent property.
for (let i = 0; i < btnShowModal.length; i++) {
  // Open menu
  btnShowModal[i].addEventListener("click", openModal);
}

// Show hidden elements - class hidden - Close menu
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// "keydown" is triggered by pressing 'any' key on the keyboard.
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  // if Escape key was pressed and the modal is currently not hidden
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
