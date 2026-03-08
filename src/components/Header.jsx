import { IconSearch, IconShoppingCart, IconUserCircle } from "@tabler/icons-react";

export function Header() {
  return (
    <>
      <div className="top-section">
        <div className="left-section">
          <img src="images/ranchu.jpg" alt="The Guppy logo" />
          <p>The Guppy</p>
        </div>

        <div className="right-section">
          <span className="header-icon-shell" aria-hidden="true">
            <IconSearch className="header-icon" stroke={1.9} />
          </span>
          <span className="header-icon-shell" aria-hidden="true">
            <IconUserCircle className="header-icon" stroke={1.9} />
          </span>
          <a href="cart.html" className="header-icon-shell" aria-label="Cart">
            <IconShoppingCart className="header-icon" stroke={1.9} />
          </a>
        </div>
      </div>

      <div className="bottom-section">
        <a href="index.html">
          <p>HOME</p>
        </a>
        <p>SHOP</p>
        <p>GUPPIES</p>
        <p>CONTACT</p>
        <p>FAQ</p>
      </div>
    </>
  );
}
