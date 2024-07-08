document.querySelector('.blocks__services').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.menu').classList.toggle('hidden');
});

document.querySelector('.menu__close').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.menu').classList.add('slide-out');
    setTimeout(function () {
        document.querySelector('.menu').classList.remove('slide-out');
        document.querySelector('.menu').classList.add('hidden');
    }, 1000);
});

function showPhoneNumber() {
    alert('Позвонить по номеру +74959999999?');
}
