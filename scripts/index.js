import { fish } from "./data/fish_products.js";
import { cart } from "./data/cart_instance.js";


function renderGuppyHTML() {
    let gridHTML = '';

    fish.forEach((fish) => {
        gridHTML += 
        `
            <div class="guppy-info">
                <img src=${fish.image}>
                <div class="guppy-description">
                    <p>${fish.name}</p>
                    <p>$${fish.priceCents / 100}</p>
                    <button class="add-to-cart-btn" data-fish-id=${fish.id}>Add to cart</button>
                </div>
            </div>
        `
    })

    document.querySelector('.guppy-grid').innerHTML = gridHTML
}

function buttonListener() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const fishId = parseInt(event.target.dataset.fishId);
            const targetFish = fish.find(f => f.id === fishId);

            const {id, name, priceCents} = targetFish
            cart.append({id, name, priceCents})
            // debug statement
            cart.print_cart()
            alert(`${targetFish.name} added to cart!`);
        })
    })

    cart.saveToLocalStorage();
}

renderGuppyHTML();
buttonListener();









