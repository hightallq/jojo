window.onscroll = function () { myFunction() };

let header = document.querySelector("header");

let sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// 

let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let currentSlide = 0;
let nextSlide = 0;
let slides = document.querySelectorAll('.slides');
let logo = document.querySelectorAll('.slide-logo')
let rightEnd = slides.length - 1;
let leftEnd = 0;

leftArrow.onclick = function () {
    changeSlide(-1);
}
rightArrow.onclick = function () {
    changeSlide(1);
}

function changeSlide(number) {
    currentSlide = nextSlide;
    nextSlide += number;
    rewind();
    slides[currentSlide].classList.remove("active-slide");
    slides[nextSlide].classList.add("active-slide");

    logo[currentSlide].classList.remove("active-slide-logo");
    logo[nextSlide].classList.add("active-slide-logo");
}

function rewind() {
    if (nextSlide > rightEnd) {
        nextSlide = leftEnd;
    }
    else if (nextSlide < leftEnd) {
        nextSlide = rightEnd;
    }
}