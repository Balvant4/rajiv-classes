import React from "react";
import MainLayout from "../../layout/MainLayout";
import UserPublicRoute from "./UserPublicRoute";
import UserPrivateRoute from "./UserPrivateRoute";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: [...UserPublicRoute, ...UserPrivateRoute], // Combine both routes
  };
};

export default getRoutes;
