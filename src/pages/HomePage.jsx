import { fish } from "../../scripts/data/fish_products.js";
import { cart } from "../../scripts/data/cart_instance.js";
import { Header } from "../components/Header.jsx";

export function HomePage() {
  function handleAddToCart(targetFish) {
    const { image, id, name, priceCents } = targetFish;
    cart.append({ image, id, name, priceCents });
    cart.saveToLocalStorage();
    cart.print_cart();
    window.alert(`${targetFish.name} added to cart!`);
  }

  return (
    <div className="website-layout">
      <div className="header">
        <Header />
      </div>

      <div className="rest-of-website">
        <div className="sidebar">
          <div className="sidebar-box">
            <div className="sidebar-box-category">
              <p>Strain</p>
            </div>

            <div className="sidebar-box-elements">
              <p>Fancy Guppies</p>
              <p>Wild Guppies</p>
              <p>Endlers</p>
            </div>
          </div>

          <div className="sidebar-box">
            <div className="sidebar-box-category">
              <p>Price</p>
            </div>

            <div className="sidebar-box-elements">
              <p className="price-box">Up to $10</p>
              <p className="price-box">$10 to $25</p>
              <p className="price-box">$25 to $40</p>
              <p className="price-box">$40 to $50</p>
              <p className="price-box">$50 and above</p>
            </div>
          </div>

          <div className="sidebar-box">
            <div className="sidebar-box-category">
              <p>Gender</p>
            </div>

            <div className="sidebar-box-elements">
              <div style={{ display: "block" }}>
                <input type="checkbox" /> Male
              </div>
              <div style={{ display: "block" }}>
                <input type="checkbox" /> Female
              </div>
            </div>
          </div>

          <div className="sidebar-box">
            <div className="sidebar-box-category">
              <p>Deals</p>
            </div>

            <div className="sidebar-box-elements">
              <p>On sale</p>
              <p>Clearance</p>
            </div>
          </div>
        </div>

        <div className="guppy-grid">
          {fish.map((fishItem) => (
            <div className="guppy-info" key={fishItem.id}>
              <img src={fishItem.image} alt={fishItem.name} />
              <div className="guppy-description">
                <p>{fishItem.name}</p>
                <p>${fishItem.priceCents / 100}</p>
                <button
                  className="add-to-cart-btn"
                  data-fish-id={fishItem.id}
                  onClick={() => handleAddToCart(fishItem)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
