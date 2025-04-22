import { createRoot } from "react-dom/client";

import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(<App />);
