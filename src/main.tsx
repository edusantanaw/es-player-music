import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PlayListProvider } from "./context/playlist";
import { SongProvider } from "./context/songs";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SongProvider>
    <PlayListProvider>
      <App />
    </PlayListProvider>
  </SongProvider>
);
