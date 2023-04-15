// Відміна автоматичного скролінгу до верху сторінки
// document.addEventListener('click', function (event) {
//     event.preventDefault();
// });

// Отримуємо посилання на кнопку за її ідентифікатором
const scrollDelivery = document.getElementById('scrollDelivery');
const scrollToHome = document.getElementById('scroll-to-home');
const scrollSushi = document.getElementById('scrollSushi');

// Додаємо обробник події "click" до кнопки
scrollDelivery.addEventListener('click', function () {
    // Використовуємо метод scrollIntoView() для прокручування сторінки до нижнього краю
    // вказуємо параметр behavior: 'smooth' для плавного скролінгу
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

scrollToHome.addEventListener('click', function () {
    // Використовуємо метод scrollIntoView() для прокручування сторінки до верхнього краю
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Скролим до рівня суш
scrollSushi.addEventListener('click', function () {
    // Прокрутити сторінку на рівень 600 пікселів
    if (window.pageYOffset < 600) {
        let sum = 600 - window.pageYOffset;
        window.scrollTo(0, window.pageYOffset + sum);
    } else {
        let sum = window.pageYOffset - 600;
        window.scrollTo(0, window.pageYOffset - sum);
    }
});
