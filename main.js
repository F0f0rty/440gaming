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
var roster = document.querySelector(".roster");
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

let modal = document.querySelector('.popup');
let modalBtn = document.querySelector('.button4');
let modalBg = document.querySelector('.modal_bg');
let modalcloseBtn = document.querySelector('.btn2');

modalBtn.addEventListener('click', function(){
	modal.classList.add('show');
	modalBg.classList.add('show');
});

document.addEventListener('click', function(e){
	let click = e.target.classList.value;
	if (click === 'modal_bg show') {
		modal.classList.remove('show');
		modalBg.classList.remove('show');
	}
})

modalcloseBtn.addEventListener('click', function(){
	modal.classList.remove('show');
	modalBg.classList.remove('show');
});