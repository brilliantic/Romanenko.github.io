function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	let totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartItemCount = document.querySelector('.cart-item-count'); // кількості товарів у кошику (на іконці)
	const deliveryOver600 = document.querySelector('.small-over-600'); // повідомлення, коли в кошику більше 600

	// Загальна вартість товарів
	const freeShipping = 600;
	// Сума всіх товарів в кошику
	let priceTotal = 0;
	// вартість доставки за замовчуванням
	let deliveryPrice = 120;

	// Обходимо всі блоки з цінами в кошику
	priceElements.forEach(function (item) {
		// Знаходимо кількість товарів
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Додаємо вартість товару до загальної вартості (кі-сть * ціну)
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});

	if (priceTotal >= freeShipping) {
		deliveryPrice = 0; // безкоштовна доставка
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'безкоштовна';
		deliveryOver600.innerText = `Замовлення більше ${freeShipping} грн - `;
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = `${deliveryPrice} грн`;
		deliveryOver600.innerText = `Замовлення менше ${freeShipping} грн - `; //міняємо повідомлення на "менше"
	} 

	if(priceTotal > 0){
	// Додаємо вартість доставки до загальної вартості
	priceTotal += deliveryPrice;
	}
	// Відображаємо загальну вартість на сторінці
	totalPriceEl.innerText = priceTotal;

	// Відображаємо кількість товарів у кошику прямо на іконці кошику в navbar
	const cartItems = cartWrapper.querySelectorAll('.cart-item');
	cartItemCount.innerText = cartItems.length;
}
