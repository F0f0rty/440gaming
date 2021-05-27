function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

const button = document.querySelector(".button");
const mp = document.querySelector(".about");
const button1 = document.querySelector(".button12");
const about = document.querySelector(".about");
const button2 = document.querySelector(".button22");
const roster = document.querySelector(".roster");
const button3 = document.querySelector(".button32");
const contactUs = document.querySelector(".contact_us");

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
  scrollTo(contactUs);
});

const popupButtons = document.querySelectorAll('a[href^="#"]');
console.log(popupButtons);
for (let popupButton of popupButtons) {
  popupButton.addEventListener("click", function (e) {
    e.preventDefault();
    let id = popupButton.getAttribute("href");
    console.log(id);
    document.querySelector(id).classList.add("show");
  });
}

const popupCloseButtons = document.querySelectorAll(".btn2");
for (let popupCloseButton of popupCloseButtons) {
  popupCloseButton.addEventListener("click", function (e) {
    e.preventDefault();
    let id = popupCloseButton.getAttribute("href");
    console.log("");
    document.querySelector(id).classList.remove("show");
  });
}



