import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">Обновлённый App</div>

      <NavBar />

      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
