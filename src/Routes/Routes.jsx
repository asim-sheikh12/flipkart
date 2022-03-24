import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./RouteType";
export const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route,index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Router>
    </div>
  );
};
