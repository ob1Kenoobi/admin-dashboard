import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./globals.css"; // 👈 Import Tailwind CSS here
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
