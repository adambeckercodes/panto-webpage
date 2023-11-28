const infoBtns = document.querySelectorAll(".info-dot");

console.log(infoBtns);

for (let btn of infoBtns) {
  console.log(btn);
  btn.addEventListener('click', showHint);
}

function showHint () {
  console.log("Click!");
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}