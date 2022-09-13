import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      setIsAuth(true);
    }

    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth: setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <div className="App">Обновлённый App</div>

        <NavBar />

        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
