import { useEffect, useState } from "react";
import Router from "./route/Router";
import PublicRoute from "./route/routes/PublicRoute";
import getRoutes from "./route/routes";
import AdminRoute from "./route/routes/AdminRoute";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...PublicRoute]);

  useEffect(() => {
    const adminroutes = AdminRoute;
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes, ...adminroutes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
};

export default App;
