'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('.dot');
    const slides = document.querySelectorAll('.slide');

    const backgrounds = [
        'url(../img/main-bg.jpg)',
        'url(../img/bg.jpg)',
        'url(../img/main-bg.jpg)',
        'url(../img/bg.jpg)',
        'url(../img/main-bg.jpg)',
        'url(../img/bg.jpg)',
    ];

    const backgroundElement = document.querySelector('.background');
    let currentIndex = 0;
    const slideInterval = 5000;

    function changeSlide() {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        backgroundElement.style.backgroundImage = backgrounds[currentIndex];
    }

    function startSlideShow() {
        currentIndex = 0;
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
        backgroundElement.style.backgroundImage = backgrounds[currentIndex];

        setInterval(changeSlide, slideInterval);
    }

    startSlideShow();

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            currentIndex = index;

            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            backgroundElement.style.backgroundImage = backgrounds[currentIndex];
        });
    });
});
