// Маска для ввода телефону
$(document).ready(function () {
    // Використовуйте клас або ідентифікатор вашого поля вводу
    $('#registrationTel').mask('+38 (999) 999-99-99'); // Формат маски телефонного номеру
    $('#loginTel').mask('+38 (999) 999-99-99'); 
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

    // При натисканні на кнопку "Увійти"
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
});
