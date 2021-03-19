function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector(".button");
var mp = document.querySelector(".about");
var button1 = document.querySelector(".button1");
var about = document.querySelector(".about");
var button2 = document.querySelector(".button2");
var roster = document.querySelector(".main-page");
var button3 = document.querySelector(".button3");
var contact_us = document.querySelector(".contact_us");

button.addEventListener("click", () => {
  scrollTo(about);
});

button1.addEventListener("click", () => {
  scrollTo(mp);
});

button2.addEventListener("click", () => {
  scrollTo(roster);
});

button3.addEventListener("click", () => {
  scrollTo(contact_us);
});
