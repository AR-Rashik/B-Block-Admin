import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./Contexts/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App></App>
    </AuthProvider>
  </React.StrictMode>
);
