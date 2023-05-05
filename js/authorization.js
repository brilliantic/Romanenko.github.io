// Маска для ввода телефону
$(document).ready(function () {
    // Використовуйте клас або ідентифікатор вашого поля вводу
    $('#registrationTel').mask('+38 (999) 999-99-99'); // Формат маски телефонного номеру
    $('#loginTel').mask('+38 (999) 999-99-99');
    $('#forgotPasswordTel').mask('+38 (999) 999-99-99');
});

$(document).ready(function () {
    // Відображаємо повідомлення про успішну дію
    function showSuccessMessage(message) {
        $(message).fadeIn();
    }

    // Функція для закриття модального вікна
    function closeModal(modal) {
        $(modal).modal("hide");
    }

    // Функція для відкриття модального вікна
    function openModal(modal) {
        const modalInstance = new bootstrap.Modal(document.getElementById(modal));
        modalInstance.show();
    }

    // При натисканні на кнопку "Зареєструватись" з вікна "реєстрації"
    $("#registrationForm").on("submit", function () {
        closeModal("#registrationModal");
        showSuccessMessage("#account-is-registered");
    });
    // $("#registrationModal").on("click", ".btn-success", function () {
    //     closeModal("#registrationModal");
    //     showSuccessMessage("#account-is-registered");
    // });

    // При натисканні на кнопку "Увійти" з вікна реєстрації
    $("#loginBtn").on("click", function () {
        closeModal("#registrationModal");
        openModal("loginModal");
    });

    // При натисканні на кнопку "Увійти в кабінет"
    // $("#loginModal").on("click", ".btn-success", function () {
    //     closeModal("#loginModal");
    //     showSuccessMessage("#account-is-login");
    // });

    // При натисканні на кнопку "Зареєструватись" з вікна "входу"
    $("#registrationBtn").on("click", function () {
        closeModal("#loginModal");
        openModal("registrationModal");
    });

    // При натискані на кнопку "Забув пароль" з вікна "входу"
    $("#forgotPassword").on("click", function () {
        closeModal("#loginModal");
        openModal("forgotPasswordModal");
    });

    // При натискані на кнопку "Увійти" з вікна "Забули пароль"
    $("#loginBtnForgotPassword").on("click", function () {
        closeModal("#forgotPasswordModal");
        openModal("loginModal");
    });

    // При натискані на кнопку "Відновити пароль" з вікна "Забули пароль"
    $("#passwordReset").on("click", function () {
        closeModal("#forgotPasswordModal");
        openModal("passwordResetModal");
    });

    // При натискані на кнопку "повернутись до ВХОДУ" з вікна "Забули пароль"
    $("#passwordResetloginBtn").on("click", function () {
        closeModal("#passwordResetModal");
        openModal("loginModal");
    });

    // Повідомлення При натискані на кнопку "Відновити пароль" з вікна "Забули пароль"
    $("#passwordResetBtn").on("click", function () {
        closeModal("#passwordResetModal");
        showSuccessMessage("#account-forgot-password");
    });

    // При натискані на кнопку "Замовити" у кошику, вікно закривається, кошик очіщується та зʼявляється повідоблення
    $("#order-form").on("click", function () {
        closeModal("#modal-cart");
        showSuccessMessage("#orderReceived");
    });
});


// form. Перевірка введених данних при реєстрації (з сайту bootstrap)
(function () {
    'use strict'

    const forms = document.querySelectorAll('.formRegistration')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

/** <--- Перевірка на валідність данних та коректність паролів ---> */
const password1 = document.getElementById('registrationPassword1');
const password2 = document.getElementById('registrationPassword2');
const incorrectPassword = document.getElementById('incorrectPassword');
const correctPassword = document.getElementById('correctPassword');
const registrationFieldset = document.querySelector('fieldset');

const isPasswordLengthValid = (password) => password.length < 8 || password.length > 20;
const doPasswordsMatch = () => password1.value === password2.value;

// Якщо паролі неспівпадають чи поза рамками кількості символів - виводить повідомлення
const updatePasswordValidity = () => {
    correctPassword.style.display = isPasswordLengthValid(password1.value) ? 'block' : 'none';
    incorrectPassword.style.display = doPasswordsMatch() ? 'none' : 'block';
};

// Перевірка на валідність форми. Якщо данні введені, то кнопка реєстрації доступна
const updateFormValidity = () => {
    const isFormValid = document.getElementById('registrationForm').checkValidity();
    document.getElementById('registrationButton').disabled = !isFormValid;
};

password1.addEventListener('input', updatePasswordValidity);
password2.addEventListener('input', updatePasswordValidity);

document.getElementById('registrationForm').addEventListener('input', updateFormValidity);
/** <--- Перевірка на валідність данних та коректність паролів ---> */


// Очіщуємо форму реєстрації
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", (e) => {
    // e.preventDefault(); // перешкоджає відправці форми на сервер

    // код для обробки відправки форми
    // наприклад, відправка запиту на сервер з даними форми

    // очищення полів форми
    registrationForm.reset();
});

// const loginForm = document.getElementById("autorizationForm");
// const loginBtn = document.getElementById("loginBtn");

// const loginTel = document.getElementById('loginTel');
// const loginPassword = document.getElementById('loginPassword');

// const updateLoginFormValidity = () => {
//     const isFormValid = document.getElementById('autorizationForm').checkValidity();
//     document.getElementById('loginBtn').disabled = !isFormValid;
//     console.log('code OK')
// };

// loginTel.addEventListener('input', updateLoginFormValidity);
// loginPassword.addEventListener('input', updateLoginFormValidity);

// document.getElementById('autorizationForm').addEventListener('input', updateLoginFormValidity);
