// Div в середині кошика, в який ми додаємо товари modal-body
const modalBody = document.querySelector('.cart-wrapper');

// Відстежуємо клік на сторінці
window.addEventListener('click', function (event) {

	// Перевіряємо що клік був зроблен по кнопці "додати в кошик"
	if (event.target.hasAttribute('data-cart')) {

		// Знаходимо карточку з товаром, в середині якої був зробленний клік
		const card = event.target.closest('.card');
		// console.log('click for cart');
		// console.log(card);


		// Збираємо данні з цього товару та записуємо їх до єдинного обʼєкту productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('.product-price').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};
		// console.log(productInfo);

		// Перевіряємо чи вже є такий товар у кошику
		const itemInCart = modalBody.querySelector(`[data-id="${productInfo.id}"]`);
		// console.log(itemInCart);

		// якщо товар є в кошику
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

			// Зібрані данні підставимо в шаблон для товара в кошику
			const cartItemHTML = `
						<div class="row  cart-item" data-id="${productInfo.id}">
							<div class="col w-100 cart-item__top">
								<div class="cart-item__img">
									<img src="${productInfo.imgSrc}" alt="${productInfo.title}">
								</div>
								<div class="cart-item__title">
								${productInfo.title}
								</div>
								<!-- cart-item__details -->
								<div class="counter-pm-price">
									<div class="items items--small counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter="">${productInfo.counter}</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
										<div class="price cart-items-price">
											<div class="price__currency">${productInfo.price}</div>
										</div>
								</div>
								<div>
									<button type="button" class="d-grid btn btn-sm btn-danger btn-remove-from-cart">
										Видалити
									</button>
								</div>
								<!-- // cart-item__details -->
							</div>
						</div>`;

			// Відправляємо товар до кошику
			modalBody.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		// Скидаємо лічильник доданого товару на "1"
		card.querySelector('[data-counter]').innerText = '1';

		// Додаємо обробник події на клік по кнопці "Remove"
		modalBody.addEventListener('click', function (event) {
			if (event.target.classList.contains('btn-remove-from-cart')) {
				// Знаходимо батьківський елемент кнопки - це рядок таблиці з товаром у кошику
				const cartItem = event.target.closest('.cart-item');
				// Видаляємо цей рядок з кошику
				cartItem.remove();
			}
		});
	}
	// Відображення статусу кошика Порожня / Повна
	toggleCartStatus()
	// Рахуємо суму в кошику
	calcCartPriceAndDelivery()
});
