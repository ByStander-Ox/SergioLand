import Typed from "typed.js";
var options = {
  strings: [
    "Hola me llamo Sergio Vásquez",
    "Me gusta aprender",
    "Me gusta saber",
    "Me gusta pensar",
    "Me gusta conocer",
    "Me gusta entender",
    "Me gusta crear"
  ],
  typeSpeed: 100,
  loop: true
};

var type = new Typed(".type", options);

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings"
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var wrapper = document.querySelector(".wrapper svg");
var btnDraw = document.querySelector(".btn-draw");
var btnErase = document.querySelector(".btn-erase");

// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
  wrapper.classList.add("active");
}

function erase() {
  wrapper.classList.remove("active");
}

// Add handlers to our buttons
btnDraw.addEventListener("click", draw, false);
btnErase.addEventListener("click", erase, false);

// Play draw animation once
setTimeout(draw, 300);
