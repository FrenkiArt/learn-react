import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            element={route.component}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
