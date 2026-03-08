import { createRoot } from "react-dom/client";
import { CartPage } from "./pages/CartPage.jsx";
import "../styles/general.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/guppy-grid.css";
import "../styles/website_layout.css";
import "../styles/cart_page.css";

createRoot(document.getElementById("root")).render(<CartPage />);
