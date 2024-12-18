import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Game from "./Game";
import { GameProvider } from "./Providers/GameProvider";
import "./Style/Style.css";
import { ModalContext } from "./Providers/ModalProvider";
import { ModalProvider } from "./Providers/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ModalProvider><BrowserRouter>
  <Routes>
  
    <Route
      path="/"
      element={
        <GameProvider>   
          <Game />
        </GameProvider>
      }
    />
  </Routes>
</BrowserRouter></ModalProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
