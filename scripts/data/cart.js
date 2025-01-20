export class Cart {
    constructor() {
        this._cart = JSON.parse(localStorage.getItem('cart')) || [];
    }

    append(item) {
        const {image, id, name, priceCents} = item;
        console.log("item is,", item)
        const inArray = this._cart.find(item => item.id == id);

        if (!inArray) {
            this._cart.push({image, id, name, priceCents, quantity: 1})
        } else {
            inArray.quantity += 1;
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this._cart));
    }

    getItems() {
        return this._cart;
    }

    print_cart() {
        for (const item of this._cart) {
            console.log(item)
        }
    }

    removeItem(fishId) {
        this._cart = this._cart.filter(f => f.id !== fishId);
    }
}