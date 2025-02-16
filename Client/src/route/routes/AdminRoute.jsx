import AdminDashboard from "../../views/admin/AdminDashboard";

const AdminRoute = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
];

export default AdminRoute;
