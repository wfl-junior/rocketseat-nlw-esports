import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GamesContextProvider } from "./contexts/GamesContext";
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GamesContextProvider>
      <App />
    </GamesContextProvider>
  </React.StrictMode>,
);
