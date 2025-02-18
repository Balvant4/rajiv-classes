import React from "react";
import MainLayout from "../../layout/MainLayout";
import UserPublicRoute from "./UserPublicRoute";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: UserPublicRoute,
  };
};

export default getRoutes;
