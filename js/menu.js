function showPhoneNumber() {
    alert('Позвонить по номеру +74959999999?');
}

const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');
const menuItems = document.querySelectorAll('.menu__item');
const menuImg = document.querySelector('.menu__img');
const menuLogo = document.querySelector('.menu__logo');

let isToggled = false;

toggle.addEventListener('click', () => {
    isToggled = !isToggled;
    toggle.classList.toggle('open', isToggled);
    menu.classList.toggle('open', isToggled);

    if (isToggled) {
        setTimeout(() => {
            menuItems.forEach((item, index) => {
                item.classList.add('visible');
            });
            menuImg.classList.add('visible');
            menuLogo.classList.add('visible');
        }, 300);
    } else {
        menuItems.forEach(item => {
            item.classList.remove('visible');
        });
        menuImg.classList.remove('visible');
        menuLogo.classList.remove('visible');
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
});
