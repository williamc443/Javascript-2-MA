
import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./ui/displayMessage.js";

export const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products";

async function getProducts() {
    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json.data);

        const products = json.data;

        renderProducts(products);
        searchProducts(products);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
}

getProducts();
