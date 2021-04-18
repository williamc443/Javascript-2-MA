import { renderProducts } from "./renderProducts.js";


export function filterProducts(products) {
    const search = document.querySelector(".search");

    search.onkeyup = function (event) {
        // console.log(event);

        const searchValue = event.target.value.trim();

        const filteredProducts = products.filter(function (product) {
            if (product.price <= parseFloat(searchValue)) {
                return product.price;
            }

      
        });
                
   renderProducts(filteredProducts);
                // renderProducts(filteredPriceProducts); 
    }}
