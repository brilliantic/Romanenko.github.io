// Маска для ввода телефону
$(document).ready(function () {
    // Використовуйте клас або ідентифікатор вашого поля вводу
    $('#registrationTel').mask('+38 (999) 999-99-99'); // Формат маски телефонного номеру
});


/*Закриваємо вікно реєстрації по кнопці "Зареєструватись", та виводимо повідомлення*/
$(document).ready(function () {
    // Відображаємо повідомлення про успішну реєстрацію
    function showSuccessMessage() {
        $("#account-is-registered").fadeIn();
    }

    // При натисканні на кнопку "Зареєструватись"
    $("#registrationModal").on("click", ".btn-success", function () {

        // Закриваємо модальне вікно
        $("#registrationModal").modal("hide");
        // Відображаємо повідомлення про успішну реєстрацію
        showSuccessMessage();
    });
});
