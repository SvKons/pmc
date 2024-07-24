'use strict';

window.addEventListener('load', () => {
    const title = document.querySelector('.contacts__title');
    const email = document.querySelector('.contacts__email');
    const tel = document.querySelector('.contacts__tel');
    const form = document.querySelector('.contacts__details');

    title.classList.add('show');
    email.classList.add('show');
    tel.classList.add('show');
    form.classList.add('show');
});

/* Валидация формы */

const form = document.querySelector('.contacts__details');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('.contacts__button');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (nameInput.value.trim() === '') {
        alert('Пожалуйста, введите ваше имя.');
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === '') {
        alert('Пожалуйста, введите ваш email.');
        emailInput.focus();
        return;
    }

    if (!isValidEmail(emailInput.value.trim())) {
        alert('Пожалуйста, введите корректный email.');
        emailInput.focus();
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Пожалуйста, введите ваше сообщение.');
        messageInput.focus();
        return;
    }

    form.submit();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
