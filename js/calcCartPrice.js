function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	// Загальна вартість товарів
	let priceTotal = 0;

	// Обходимо всі блоки з цінами в кошику
	priceElements.forEach(function (item) {
		// Знаходимо кількість товарів
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Додаємо вартість товару до загальної вартості (кі-сть * ціну)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

		// Додаєм вартість доставки якщо вона менше 600
		if (priceTotal < 600) {
			priceTotal += 120;
		}
	});

	// Відображаємо ціну на сторінці
	totalPriceEl.innerText = priceTotal;

	// Скрываемо / Показуємо блок з вартістю доставки
	if (priceTotal > 0) {
		cartDelivery.style.display = 'block';
	} else {
		cartDelivery.style.display = 'none';
	}

	priceTotal -= 120; // прибрав додавання доставки для вірного розрахунку
	// Вказуємо вартість доставки
	if (priceTotal >= 600) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'безкоштовна';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '120 грн.';
	}
}