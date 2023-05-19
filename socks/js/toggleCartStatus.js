//проверка состояния корзины
function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('.order-form');
    const Itog = document.querySelector('.cart-total');

    if (cartWrapper.children.length > 0) {
        console.log('FULL');
        cartEmptyBadge.classList.add('none');
        Itog.classList.remove('none');
        //orderForm.classList.remove('none');

    } else {
        console.log('EMPTY');
        cartEmptyBadge.classList.remove('none');
        Itog.classList.add('none');
       // orderForm.classList.add('none');
    }
}
