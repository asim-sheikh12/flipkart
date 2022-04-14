import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import { publicRoutes, privateRoutes } from "./RouteType";
export const Routing = () => {
  const antIcon = (
    <LoadingOutlined className="loader" style={{ fontSize: 48 }} spin />
  );
  return (
    <div>
      <Suspense fallback={<Spin indicator={antIcon} />}>
        <Router>
          <Routes>
            {publicRoutes?.map((route,index) => {
              return <Route path={route.path} key={index} element={route.element} />;
            })}
            {privateRoutes.map((route,index) => {
              return (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    <ProtectedRoutes Component={route.element} />
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
};
