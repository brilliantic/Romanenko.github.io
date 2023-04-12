
const productsContainer = document.querySelector('#products-container');

// Запускаемо getProducts
getProducts();

// Асинхронна функція отримання даних із файлу products.json
async function getProducts() {
	// Отримуємо дані з products.json
	const response = await fetch('js/products.json');
	// console.log(response);
	// Парсимо дані з JSON формату в JS
	const productsArray = await response.json();
	// console.log(productsArray);
	// Запускаємо ф-ю рендеру (відображення товарів)
	renderProducts(productsArray);
}

// На основі данних з json створюємо картку по цьому шаблону
function renderProducts(productsArray) {
	productsArray.forEach(function (item) {
		const productHTML = `<div class="col-lg-4 col-sm-6 mb-3">
							<div class="product-item">
							<div class="card" data-id="${item.id}">
							<div class="product-thumb">
								<a href="#"><img class="product-img"
										src="img/${item.imgSrc}" alt="${item.title}"></a>
										<span><small data-items-in-box class="text-muted"><span class="span-empty"></span>${item.itemsInBox} шт.</small></span>
										<span class="text-muted price__weight">&nbsp;${item.weight}г.</span>
							</div>
							<div class="product-details">
								<h4><a class="item-title" href="#">${item.title}</a></h4>
								<p>${item.description}</p>
								<div class="product-bottom-details d-flex justify-content-between">
									<div class="all-prices h4">
										<small class="h6 oldPrice">${item.oldPrice}</small> 
										<span class="product-price">${item.price} грн</span>
									</div>
									
									
									<div class="product-links">
										<!-- Счетчик -->
										<div class="items counter-wrapper">
											<div class="items__control" data-action="minus">-</div>
											<div class="items__current" data-counter>1</div>
											<div class="items__control" data-action="plus">+</div>
										</div>
										<!-- // Счетчик -->

										<a href="#" id="add-to-cart"><i data-cart class="cart-btn fas fa-shopping-cart"></i></a>
										<a href="#"><i class="cart-btn far fa-heart"></i></a>
									</div>
								</div>
							</div>
							</div>
							</div>
							</div>`;

		// Роздруковуємо картку 
		productsContainer.insertAdjacentHTML('beforeend', productHTML);



		// Отримання доступу до елемента після його додавання в DOM
		const addToCartButton = productsContainer.querySelector(`[data-id="${item.id}"] #add-to-cart`);
		// console.log(addToCartButton);
		
		addToCartButton.addEventListener('click', function (event) {
			event.preventDefault();
			// Виконання дії при кліку на кнопку "Додати в кошик"
			// В цьому випадку відобразити повідомлення про додавання товару в кошик
			const cartNotification = document.getElementById('cart-notification');
			cartNotification.style.display = 'block';

			setTimeout(function () {
				cartNotification.style.display = 'none';
			}, 7000);
		});
	});
}
