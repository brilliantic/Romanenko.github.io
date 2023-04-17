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

    // При натисканні на кнопку "Зареєструватись"
    $("#registrationModal").on("click", ".btn-success", function () {
        closeModal("#registrationModal");
        showSuccessMessage("#account-is-registered");
    });

    // При натисканні на кнопку "Увійти" з вікна реєстрації
    $("#loginBtn").on("click", function () {
        closeModal("#registrationModal");
        openModal("loginModal");
    });

    // При натисканні на кнопку "Увійти в кабінет"
    $("#loginModal").on("click", ".btn-success", function () {
        closeModal("#loginModal");
        showSuccessMessage("#account-is-login");
    });

    // При натисканні на кнопку "Зареєструватись"
    $("#registrationBtn").on("click", function () {
        closeModal("#loginModal");
        openModal("registrationModal");
    });

    // При натискані на кнопку "Забув пароль"
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

    // При натискані на кнопку "Відновити пароль" з вікна "Забули пароль"
    $("#passwordResetloginBtn").on("click", function () {
        closeModal("#passwordResetModal");
        openModal("loginModal");
    });

    // При натискані на кнопку "Відновити пароль" з вікна "Забули пароль"
    $("#passwordResetBtn").on("click", function () {
        closeModal("#passwordResetModal");
        showSuccessMessage("#account-forgot-password");
    });
});