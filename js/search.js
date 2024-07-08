const searchIcon = document.querySelector('.header__search');
const searchInput = document.querySelector('.header__search-input');

searchIcon.addEventListener('click', () => {
    searchInput.classList.add('active');
    searchIcon.classList.add('hidden');
});

document.addEventListener('click', event => {
    if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
        searchInput.classList.remove('active');
        searchIcon.classList.remove('hidden');
    }
});
