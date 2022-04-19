window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  document
    .querySelector("#open_trello_popup")
    .addEventListener("click", () => showTrelloImg());

  document
    .querySelector("#open_code_popup")
    .addEventListener("click", () => showCodeImg());
}

function showTrelloImg() {
  console.log("click");
  const trelloPopup = document.querySelector("#trello_popup");
  trelloPopup.style.display = "block";

  const closePopup = document.querySelector("#close_trello_popup");
  closePopup.addEventListener("click", closeTrelloImg);
}

function showCodeImg() {
  console.log("click");
  const popup = document.querySelector("#code_popup");
  popup.style.display = "block";

  const closePopup = document.querySelector("#close_code_popup");
  closePopup.addEventListener("click", closeCodeImg);
}

function closeTrelloImg() {
  document.querySelector("#trello_popup").style.display = "none";
  document
    .querySelector("#trello_popup")
    .removeEventListener("click", closeTrelloImg);
}

function closeCodeImg() {
  document.querySelector("#code_popup").style.display = "none";
  document
    .querySelector("#code_popup")
    .removeEventListener("click", closeCodeImg);
}
