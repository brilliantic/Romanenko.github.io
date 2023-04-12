	// Додаємо прослушку на все вікно
	window.addEventListener('click', function (event) {
	// console.log('click');
	// console.log(event.target);

	// Оголошуємо змінну для лічильника
    let counter;

	// Перевіряємо клік строго за кнопками Плюс або Мінус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		// Знаходимо wrapper лічильника
		const counterWrapper = event.target.closest('.counter-wrapper');
		// Знаходимо дів з числом лічильника
        counter = counterWrapper.querySelector('[data-counter]');
	}

	// Перевіряємо, чи є елемент, по якому було здійснено клік кнопкою Плюс
	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;
	}

	// Перевіряємо, чи є елемент, по якому було здійснено клік кнопкою Мінус
	if (event.target.dataset.action === 'minus') {

		// Перевіряємо щоб лічильник був більшим за 1
		if (parseInt(counter.innerText) > 1) {
			// Змінюємо текст у лічильнику зменшуючи його на 1
			counter.innerText = --counter.innerText;

		} 
		// else if (event.target.closest('.btn-remove-from-cart')) {
		// 	// Перевірка на товар, який знаходиться в кошику
		// 	// console.log('IN CART!!!!');
		// 	// Удаляем товар из корзины
		// 	// event.target.closest('.cart-item').remove();

		// 	// Відображення статусу кошика Порожня / Повна
		// 	toggleCartStatus();

		// 	//// Перерахунок загальної вартості товарів у кошику
			calcCartPriceAndDelivery();
		// }

	}

	// Перевіряємо клік на + або - всередині коризини
	if (event.target.hasAttribute('data-action') && event.target.closest('.modal-body')) {
		// Перерахунок загальної вартості товарів у кошику
		calcCartPriceAndDelivery();
	}
});