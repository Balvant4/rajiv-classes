import AdminLayout from "../../adminLayout/AdminLayout";
import AdminDashboard from "../../views/admin/AdminDashboard";

const AdminRoute = [
  {
    path: "/admin/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
    ],
  },
];

export default AdminRoute;
