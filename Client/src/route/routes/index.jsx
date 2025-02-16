import React from "react";
import MainLayout from "../../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: PrivateRoute,
  };
};

export default getRoutes;
