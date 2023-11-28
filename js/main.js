const infoBtns = document.querySelectorAll(".info-dot");

// Клик по кнопкам с подсказками

for (let btn of infoBtns) {
  btn.addEventListener('click', showHint);
}

function showHint () {
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// Закрываем подсказки по клику по всему документу

document.addEventListener