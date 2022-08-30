"use strict";
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overLay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");

const openModalWindow = () => {
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
};
showModal.forEach((e) => {
  e.addEventListener("click", (e) => openModalWindow());
});
const closeModalWindow = () => {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};
closeModal.addEventListener("click", () => closeModalWindow());
overLay.addEventListener("click", () => closeModalWindow());

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (
    e.key == "Escape" ||
    (e.key == "Enter" && !modal.classList.contains("hidden"))
  )
    closeModalWindow();
});
