const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	try {
		// Получаем данные из products.json
		const response = await fetch('./products.json');
		// Парсим данные из JSON формата в JS
		const products = await response.json();
		// Запускаем ф-ю рендера (отображения товаров)
		renderProducts(products);
	} catch (err) {
		console.error(err);
	}
}

function renderProducts(productsArray) {
	productsArray.forEach(function (product) {
		const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="${product.id}">
							<img class="product-img" src="img/roll/${product.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${product.title}</h4>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__currency">${product.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`;
		
		productsContainer.insertAdjacentHTML('beforeend', productHTML);
	});
}
