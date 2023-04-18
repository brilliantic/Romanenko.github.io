// // Змінна для збереження стану меню
// let isMenuOpen = false;

// // Функція для відкриття/закриття меню
// function toggleMenu() {
//     let myDropdownMenu = document.getElementById('my-dropdown-menu');
//     if (!isMenuOpen) {
//         myDropdownMenu.style.opacity = '1';
//         myDropdownMenu.style.visibility = 'visible';
//         myDropdownMenu.style.maxHeight = '100px'; /* або будь-яке значення, яке відповідає висоті списку */
//         isMenuOpen = true;
//     } else {
//         myDropdownMenu.style.opacity = '0';
//         myDropdownMenu.style.visibility = 'hidden';
//         myDropdownMenu.style.maxHeight = '0';
//         isMenuOpen = false;
//     }
// }

// // Обробник події click на кнопці
// document.getElementById('user-nav-link').addEventListener('click', function() {
//     toggleMenu();
// });

// // Обробник події click на документі
// document.addEventListener('click', function(event) {
//     const target = event.target;
//     const myDropdownMenu = document.getElementById('my-dropdown-menu');
//     if (!target.closest('#user-nav-link') && !target.closest('#my-dropdown-menu')) {
//         myDropdownMenu.style.opacity = '0';
//         myDropdownMenu.style.visibility = 'hidden';
//         myDropdownMenu.style.maxHeight = '0';
//         isMenuOpen = false;
//     }
// });

// // Обробник події keydown на клавіатурі
// document.addEventListener('keydown', function(event) {
//     if (event.keyCode === 27) { // Код клавіші 'Esc'
//         const myDropdownMenu = document.getElementById('my-dropdown-menu');
//         myDropdownMenu.style.opacity = '0';
//         myDropdownMenu.style.visibility = 'hidden';
//         myDropdownMenu.style.maxHeight = '0';
//         isMenuOpen = false;
//     }
// });