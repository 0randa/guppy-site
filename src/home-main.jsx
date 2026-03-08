import { createRoot } from "react-dom/client";
import { HomePage } from "./pages/HomePage.jsx";
import "../styles/general.css";
import "../styles/header.css";
import "../styles/sidebar.css";
import "../styles/guppy-grid.css";
import "../styles/website_layout.css";

createRoot(document.getElementById("root")).render(<HomePage />);
