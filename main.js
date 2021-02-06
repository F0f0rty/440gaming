function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector(".button");
var mp = document.querySelector(".main-page");
var button1 = document.querySelector(".button1");
var about = document.querySelector(".about");



button.addEventListener("click", () => {
  scrollTo(about);
});

button1.addEventListener("click", () => {
  scrollTo(mp);
})


