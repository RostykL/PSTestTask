import App from "./App";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(<App />);