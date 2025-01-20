import { cart } from "./data/cart_instance.js";

export function renderShoppingCart() {    
    const shopping = document.querySelector('.shopping-cart-items-list');

    // Null check for .shopping-cart-items-list
    if (!shopping) {
        console.error("Error: .shopping-cart-items-list not found in the DOM.");
        return;
    }

    let HTML = ``;
    const shoppingCart = cart.getItems();

    for (const item of shoppingCart) {
        console.log(item.image)
        HTML += `
        <div class="shopping-cart-item">
            <div class="product-info">
                <img src=${item.image}>
                <p>${item.name}</p>
            </div>
            <div class="quantity-info">
                <p>-</p>
                <div class="quantity-square">
                    <p>${item.quantity}</p>
                </div>
                <p>+</p>
            </div>
            <div class="price-tag">
                <p>$${item.priceCents / 100}</p>
            </div>
            <p class="remove-button">x</p>
        </div>`;
    }

    shopping.innerHTML = HTML;
}

// Ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderShoppingCart();
});