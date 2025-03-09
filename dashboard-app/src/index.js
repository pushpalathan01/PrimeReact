import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this contains Tailwind directives
import App from "./App";
import { PrimeReactProvider } from "primereact/api";

import Tailwind from "primereact/passthrough/tailwind";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
