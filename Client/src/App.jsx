import { useEffect, useState } from "react";
import Router from "./route/Router";
import PublicRoute from "./route/routes/PublicRoute";
import getRoutes from "./route/routes";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...PublicRoute]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
};

export default App;
