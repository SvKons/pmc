'use strict';

window.addEventListener('load', () => {
    const title = document.querySelector('.projects-top__title');
    const text = document.querySelector('.projects-top__text');
    const img = document.querySelector('.projects-top__img');

    title.classList.add('show');
    text.classList.add('show');
    img.classList.add('show');
});

const projectsList = document.querySelector('.projects__list');

window.addEventListener('scroll', () => {
    const projectsListTop = projectsList.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (projectsListTop < windowHeight) {
        projectsList.classList.add('show');
    }
});
