var link = document.querySelector(".feature__button");
var linkcatalog = document.querySelectorAll(".site-catalog__svg-link");
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

for (var i = 0; i < linkcatalog.length; i++) {
  linkcatalog[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    }
  }
});

popup.addEventListener("mouseup", function(evt) {
  if (evt.target.closest('.modal__wrapper') === null) {
    popup.classList.remove("modal-show");
  }
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

(function(evt) {
  evt.matches = evt.matches || evt.mozMatchesSelector || evt.msMatchesSelector || evt.oMatchesSelector || evt.webkitMatchesSelector;
  evt.closest = evt.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {
      return null
    } else return this.parentElement.closest(selector)
  };
}(Element.prototype));



