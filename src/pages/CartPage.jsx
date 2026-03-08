import { useMemo, useState } from "react";
import { cart } from "../../scripts/data/cart_instance.js";
import { formatCurrency } from "../../scripts/helper.js";
import { Header } from "../components/Header.jsx";

function getNumCartItems(items) {
  let totalItems = 0;
  let totalPrice = 0;

  for (const item of items) {
    totalItems += item.quantity;
    totalPrice += item.quantity * item.priceCents;
  }

  return { totalItems, totalPrice };
}

export function CartPage() {
  const [cartItems, setCartItems] = useState(() => [...cart.getItems()]);

  const totals = useMemo(() => getNumCartItems(cartItems), [cartItems]);

  function rerenderFromCart() {
    setCartItems([...cart.getItems()]);
  }

  function handleRemove(fishId) {
    const targetFish = cart.getItems().find((fishItem) => fishItem.id === fishId);
    if (!targetFish) {
      return;
    }

    cart.removeItem(fishId);
    cart.saveToLocalStorage();
    window.alert(`Removed ${targetFish.name} from cart!`);
    rerenderFromCart();
  }

  function handlePlus(fishId) {
    const targetFish = cart.getItems().find((fishItem) => fishItem.id === fishId);
    if (!targetFish) {
      return;
    }

    targetFish.quantity += 1;
    cart.saveToLocalStorage();
    rerenderFromCart();
  }

  function handleMinus(fishId) {
    const targetFish = cart.getItems().find((fishItem) => fishItem.id === fishId);
    if (!targetFish) {
      return;
    }

    targetFish.quantity -= 1;
    if (targetFish.quantity === 0) {
      cart.removeItem(fishId);
    }

    cart.saveToLocalStorage();
    rerenderFromCart();
  }

  return (
    <div className="website-layout">
      <div className="header">
        <Header />
      </div>

      <div className="cart-rest-of-website">
        <div className="cart-and-summary">
          <div className="checkout-cart">
            <p>Shopping Cart</p>

            <div className="shopping-cart-grid">
              <div className="shopping-cart-header">
                <div className="product-info">
                  <p>Product</p>
                </div>
                <div className="quantity-info">
                  <p>Quantity</p>
                </div>
                <div className="price-tag-header">
                  <p>Price</p>
                </div>
                <div className="remove-button"></div>
              </div>

              <div className="shopping-cart-items-list">
                {cartItems.map((item) => (
                  <div className="shopping-cart-item" key={item.id}>
                    <div className="product-info">
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                    <div className="quantity-info">
                      <p
                        className="js-minus_button minus-button"
                        data-fish-id={item.id}
                        onClick={() => handleMinus(item.id)}
                      >
                        -
                      </p>
                      <div className="quantity-square">
                        <p>{item.quantity}</p>
                      </div>
                      <p
                        className="js-plus-button plus-button"
                        data-fish-id={item.id}
                        onClick={() => handlePlus(item.id)}
                      >
                        +
                      </p>
                    </div>
                    <div className="price-tag">
                      <p>${item.priceCents / 100}</p>
                    </div>
                    <p
                      className="remove-button"
                      data-fish-id={item.id}
                      onClick={() => handleRemove(item.id)}
                    >
                      x
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-summary">
            <p>Order summary</p>
            <p>
              Items ({totals.totalItems}): {formatCurrency(totals.totalPrice)}
            </p>
            <p>Shipping: $0</p>
            <p>Order total: {formatCurrency(totals.totalPrice)}</p>

            <button>Place your order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
