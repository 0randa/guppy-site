import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { CartPage } from "./pages/CartPage.jsx";
import "@mantine/core/styles.css";
import "../styles/general.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/guppy-grid.css";
import "../styles/website_layout.css";
import "../styles/cart_page.css";

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <CartPage />
  </MantineProvider>
);
