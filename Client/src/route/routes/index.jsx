import MainLayout from "../../layout/MainLayout";
import privateRoute from "./privateRoute";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoute,
  };
};

export default getRoutes;
