import { useEffect, useState } from "react";
import Router from "./route/Router";
import PublicRoute from "./route/routes/PublicRoute";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...PublicRoute]);

  useEffect(() => {
    setAllRoutes([...allRoutes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
};

export default App;
