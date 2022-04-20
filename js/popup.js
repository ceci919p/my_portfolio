"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  document
    .querySelector("#open_popup")
    .addEventListener("click", () => showImg());
}

function showImg() {
  console.log("click");
  const popup = document.querySelector("#popup");
  popup.style.display = "block";

  const closePopup = document.querySelector("#close_popup");
  closePopup.addEventListener("click", closeImg);
}

function closeImg() {
  document.querySelector("#popup").style.display = "none";
  document.querySelector("#popup").removeEventListener("click", closeImg);
}
