window.addEventListener('load', () => {
    const title = document.querySelector('.services__title-description');
    const text = document.querySelector('.services__text-description');
    const img = document.querySelector('.services__img');

    title.classList.add('show');
    text.classList.add('show');
    img.classList.add('show');
});

const servicesWrapBg = document.querySelector('.services__wrap-bg');

servicesWrapBg.addEventListener('scroll', () => {
    const servicesItems = document.querySelectorAll('.services__item');
    const servicesWrapBgTop = servicesWrapBg.scrollTop;

    servicesItems.forEach(item => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;

        if (servicesWrapBgTop >= itemTop - servicesWrapBg.offsetHeight + itemHeight) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
