var link = document.querySelector(".feature__button, .site-video__button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__background");
var toggle = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav");
var x = document.querySelector(".main-nav__toggle");

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

x.classList.add("main-nav__toggle--show");

nav.classList.add("main-nav__list--close");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("main-nav__list--close");
  x.classList.toggle("main-nav__toggle--close");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  popup.classList.remove("modal-show");
});
