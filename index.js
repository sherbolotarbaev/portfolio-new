// Burger menu
document.addEventListener("DOMContentLoaded", function () {
  // Выбрать элемент кнопки бургера с помощью его ID
  let hamburger = document.getElementById("nav-icon");
  // Выбрать элемент меню с помощью его класса
  let navbar = document.querySelector(".navbar");
  let navLinks = document.querySelectorAll(".nav-links a");

  // Прикрепить обработчик события клика к кнопке бургера
  hamburger.addEventListener("click", function () {
    // Переключить класс "active" у элемента меню
    navbar.classList.toggle("active");
    // Переключить класс "open" у элемента кнопки бургера
    hamburger.classList.toggle("open");
  });

  //  добавляем обработчик события click к каждой ссылке меню
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      hamburger.classList.remove("open");
    });
  });
});