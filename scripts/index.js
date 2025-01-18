import { fish } from "./data/fish_products.js";

console.log("hi")

let gridHTML = '';

fish.forEach((fish) => {
    console.log(fish)
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


const res = document.querySelector('.guppy-grid').innerHTML = gridHTML
console.log(res);



