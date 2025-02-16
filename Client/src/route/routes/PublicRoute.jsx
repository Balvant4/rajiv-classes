import AdminLogin from "../../views/auth/AdminLogin";
import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";

const PublicRoute = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default PublicRoute;
