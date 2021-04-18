
import { renderProducts } from "./ui/renderProducts.js";
import { displayMessage } from "./ui/displayMessage.js";
import { filterProducts } from "./ui/filterProducts.js";
import { url } from "./ui/constants.js";

export async function getProducts() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.data);

        const products = json.data;

        renderProducts(products);
        filterProducts(products);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}

getProducts();
