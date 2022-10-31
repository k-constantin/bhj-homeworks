const product = document.querySelectorAll('.product');
const bascket = document.querySelector('.cart__products')

product.forEach(item => {
    const controlDec = item.querySelector('.product__quantity-control_dec');
    const controlInc = item.querySelector('.product__quantity-control_inc');
    const quantityVal = item.querySelector('.product__quantity-value');
    const addProduct = item.querySelector('.product__add');

    controlDec.onclick = () => {
        if (Number(quantityVal.textContent) > 1) {
            quantityVal.textContent = String(Number(quantityVal.textContent) - 1);
        };
    }    
    controlInc.onclick = () => {
        quantityVal.textContent = String(Number(quantityVal.textContent) + 1);
    };

    addProduct.addEventListener('click', function() {
        const productId = item.dataset.id;
        const productImg = item.querySelector('.product__image').src;
        bascket.insertAdjacentHTML(
            'afterbegin',`<div class="cart__product" data-id="${productId}"><img class="cart__product-image" src="${productImg}"><div class="cart__product-count">${quantityVal.textContent}</div></div>`);
          }
    )
    })
