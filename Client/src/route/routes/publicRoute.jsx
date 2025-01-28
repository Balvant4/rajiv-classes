import AdminLogin from "../../view/auth/AdminLogin";
import Login from "../../view/auth/Login";
import SignUp from "../../view/auth/SignUp";

const publicRoute = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default publicRoute;
