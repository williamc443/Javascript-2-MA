export function renderProducts(productsToRender) {
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productContainer.innerHTML += `<div class="product">
                                        <h4>Name: ${product.name}</h4>
                                        <p>Price: ${product.price}</p>
                                    </div>`;
    });
}
