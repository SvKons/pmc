'use strict';

const showPhoneNumber = () => {
    alert('Позвонить по номеру +74959999999?');
};

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');
const menuItems = document.querySelectorAll('.menu__item');
const menuImg = document.querySelector('.menu__img');
const menuLogo = document.querySelector('.menu__logo');
const menuCopy = document.querySelector('.copy');

let isToggled = false;

toggle.addEventListener('click', () => {
    isToggled = !isToggled;
    toggle.classList.toggle('open', isToggled);
    menu.classList.toggle('open', isToggled);

    if (isToggled) {
        setTimeout(() => {
            menuItems[0].classList.add('visible');
        }, 500);
        menuItems.forEach((item, index) => {
            if (index !== 0) {
                setTimeout(() => {
                    item.classList.add('visible');
                }, (index + 1) * 300);
            }
        });
        setTimeout(() => {
            menuImg.classList.add('visible');
            menuLogo.classList.add('visible');
            menuCopy.classList.add('visible');
        }, (menuItems.length + 1) * 200);
    } else {
        menuItems.forEach(item => {
            item.classList.remove('visible');
        });
        menuImg.classList.remove('visible');
        menuLogo.classList.remove('visible');
        menuCopy.classList.remove('visible');
    }
});

closeButton.addEventListener('click', () => {
    isToggled = false;
    toggle.classList.toggle('open', isToggled);
    menu.classList.toggle('open', isToggled);

    menuItems.forEach(item => {
        item.classList.remove('visible');
    });
    menuImg.classList.remove('visible');
    menuLogo.classList.remove('visible');
    menuCopy.classList.remove('visible');
});

/* скрол меню */

const toggleButton = document.querySelector('.toggle');
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;
    const isFixed = toggleButton.classList.contains('fixed-toggle');

    if (scrollPosition > headerHeight && !isFixed) {
        toggleButton.classList.add('fixed-toggle');
    } else if (scrollPosition <= headerHeight && isFixed) {
        toggleButton.classList.remove('fixed-toggle');
    }
});
