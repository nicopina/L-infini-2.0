import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import { UserProvider } from "./Context/UserContext";
import { DataProvider } from "./Context/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <UserProvider>
            <DataProvider>
          <App />
            </DataProvider>
        </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
