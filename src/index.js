import React from "react";
import { createRoot } from "react-dom";
import App from "./App"; // Import the App component

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <React.StrictMode>
      {/* Render the entire App component, which contains the Router and Routes */}
      <App />
    </React.StrictMode>
  </>
);
