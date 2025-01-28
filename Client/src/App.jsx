import React, { useEffect, useState } from "react";
import publicRoute from "./route/routes/publicRoute";
import AllRoute from "./route/AllRoute";
import getRoutes from "./route/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoute]);
  useEffect(() => {
    const routes = getRoutes();
    console.log(routes);
    setAllRoutes((prev) => [...prev, routes]);
    console.log(allRoutes);
  }, []);
  return <AllRoute allRoute={allRoutes} />;
}

export default App;
