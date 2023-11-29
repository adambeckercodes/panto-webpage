const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// Клик по кнопкам с подсказками
for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    // Hide all hint
    for (let hint of infoHints) {
      if (this.parentNode.querySelector(".info-hint") !== hint) {
        hint.classList.add("none");
      }
    }

    // Show current hint
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

// Закрываем подсказки при клике по всему документу
document.addEventListener("click", function () {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

// Запрещаем всплытие события клика при клике на подсказки
for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}

// Swiper slider
const swiper = new Swiper(".swiper", {
  loop: true,
  freemode: true,

  slidesPerView: 4,
  spaceBetween: 42,

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// Tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {

  btn.addEventListener("click", function () {

    // Removing active class from all tab buttons
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }

    // Adding active class to the tab button
    this.classList.add("tab-controls__btn--active");

    // Получаем значение категории товаров которые нцжно включить
    console.log(this.dataset.tab);

    // Скрыть все товары
    for (let product of tabsProducts) {
      product.classList.add("none");
    }


  });
}
