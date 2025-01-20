import { cart } from "./data/cart_instance.js";
import { formatCurrency } from "./helper.js";

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
            <p class="remove-button" data-fish-id=${item.id}>x</p>
        </div>`;
    }

    shopping.innerHTML = HTML;
}

function getNumCartItems(cart) {
    let totalItems = 0;
    let totalPrice = 0;

    for (const item of cart.getItems()) {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.priceCents;
    }

    return {totalItems, totalPrice};

}

function renderOrderSummary() {
    const orderSummary = document.querySelector('.order-summary');

    const {totalItems, totalPrice} = getNumCartItems(cart);
    // TODO: fix shipping and order
    const HTML = `<p>Order summary</p>
                    <p>Items (${totalItems}): ${formatCurrency(totalPrice)}</p>
                    <p>Shipping: $0</p>
                    <p>Order total: ${formatCurrency(totalPrice)}</p>

                    <button>Place your order</button>`

    orderSummary.innerHTML = HTML;
}

function removeButtonListener() {
    // query select all of the elements with class "remove button"

    const removeButton = document.querySelectorAll('.remove-button');

    removeButton.forEach(button =>
        button.addEventListener("click", (event) => {
            const fishId = parseInt(event.target.dataset.fishId);
            const cartItems = cart.getItems();
            const targetFish = cartItems.find(f => f.id === fishId);
            const updatedCart = cartItems.filter(f => f.id !== fishId);
            cart._cart = updatedCart; 
            cart.saveToLocalStorage();
            alert(`Removed ${targetFish.name} from cart!`);
            renderShoppingCart();
            renderOrderSummary();
            removeButtonListener();
        })
    )
    
    

}

// Ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderShoppingCart();
    renderOrderSummary();
    removeButtonListener();
});