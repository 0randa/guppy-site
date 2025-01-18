export function renderHeader() {
    document.querySelector('.header').innerHTML =

    `
        <div class="top-section">
                <div class="left-section">
                    <img src="images/ranchu.jpg">
                    <p>The Guppy</p>
                </div>

                <div class="right-section">
                    <img src="icons/search.svg">
                    <img src="icons/profile-icon.jpeg">
                    <a href="cart.html">
                        <img src="icons/shopping-cart.png">
                    </a>
                </div>
            </div>

            <div class="bottom-section">
                <a href="index.html">
                    <p>HOME</p>
                </a>
                <p>SHOP</p>
                <p>GUPPIES</p>
                <p>CONTACT</p>
                <p>FAQ</p>
            </div>
    `
}

function headStyles() {
    document.head.innerHTML += 
    `       <link rel="stylesheet" href="styles/general.css">
            <link rel="stylesheet" href="styles/header.css">
            <link rel="stylesheet" href="styles/sidebar.css">
            <link rel="stylesheet" href="styles/guppy-grid.css">`
}


headStyles();
renderHeader();