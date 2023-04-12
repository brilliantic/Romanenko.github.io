// Отримання елементів DOM
const navbar = document.querySelector('.my-header-navbar');
const cartLink = document.querySelector('.item-nav-cart');
const modalCart = document.querySelector('#modal-cart');

// Функція для вимкнення класу sticky-top
function disableStickyTop() {
    navbar.classList.remove('sticky-top');
}

// Функція для включення класу sticky-top
function enableStickyTop() {
    navbar.classList.add('sticky-top');
}

// Додавання обробників подій на клік по кошику та закриття модального вікна кошика
cartLink.addEventListener('click', () => {
    disableStickyTop();
});

modalCart.addEventListener('hidden.bs.modal', () => {
    enableStickyTop();
});
