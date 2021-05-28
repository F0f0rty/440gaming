function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector(".button");
var mp = document.querySelector(".about");
var button1 = document.querySelector(".button12");
var about = document.querySelector(".about");
var button2 = document.querySelector(".button22");
var roster = document.querySelector(".roster");
var button3 = document.querySelector(".button32");
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


const popupbuttons = document.querySelectorAll('a[href^="#"]');
console.log(popupbuttons)
for (let popupbutton of popupbuttons) {
  popupbutton.addEventListener('click', function (e) {
    e.preventDefault();
    let id = popupbutton.getAttribute('href');
    console.log(id)
    document.querySelector(id).classList.add('show')      
  });
};


const popupclosebuttons = document.querySelectorAll(".btn2");
for (let popupclosebutton of popupclosebuttons) {
  popupclosebutton.addEventListener('click', function (e) {
    e.preventDefault();
    let id = popupclosebutton.getAttribute('href');
    console.log('')
    document.querySelector(id).classList.remove('show')      
  });
};

