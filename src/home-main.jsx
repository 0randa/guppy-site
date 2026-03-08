import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { HomePage } from "./pages/HomePage.jsx";
import "@mantine/core/styles.css";
import "../styles/general.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/guppy-grid.css";
import "../styles/website_layout.css";

createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <HomePage />
  </MantineProvider>
);
