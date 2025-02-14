import AdminLogin from "../../views/auth/AdminLogin";
import Login from "../../views/auth/Login";
import Register from "../../views/auth/Register";
import TeacherLogin from "../../views/auth/TeacherLogin";

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
  {
    path: "/teacher/login",
    element: <TeacherLogin />,
  },
];

export default PublicRoute;
