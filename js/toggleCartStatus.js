// Відображення статусу кошика Порожня / Повна
function toggleCartStatus() {
    // console.log(toggleCartStatus);

    const cartWrapper = document.querySelector('.cart-wrapper');
    // console.log(cartWrapper.children.length)
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    
    /*  Якщо в кошику більше нуля, то прибираємо повідобрення "кошик пуст"
        Також, якщо в кошику є товар - додаємо кнопку "замовити" */
    if (cartWrapper.children.length > 0) {
        // console.log('FULL');

        cartEmptyBadge.style.display = 'none';
        orderForm.style.display = 'block';
    } else {
        // console.log('EMPTY');
        
        cartEmptyBadge.style.display = 'block';
        orderForm.style.display = 'none';
    }
};
