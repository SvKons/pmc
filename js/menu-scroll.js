window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});
