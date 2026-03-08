export function Header() {
  return (
    <>
      <div className="top-section">
        <div className="left-section">
          <img src="images/ranchu.jpg" alt="The Guppy logo" />
          <p>The Guppy</p>
        </div>

        <div className="right-section">
          <img src="icons/search.svg" alt="Search" />
          <img src="icons/profile-icon.jpeg" alt="Profile" />
          <a href="cart.html">
            <img src="icons/shopping-cart.png" alt="Cart" />
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
