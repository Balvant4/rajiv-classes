import AdminRoute from "./AdminRoute";
import UserPrivateRoute from "./UserPrivateRoute";

const AdminPrivateRoute = [...AdminRoute, ...UserPrivateRoute];

export default AdminPrivateRoute;
