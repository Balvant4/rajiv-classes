import { useRoutes } from "react-router-dom";

function AllRoute({ allRoute }) {
  const routes = useRoutes([...allRoute]);
  return routes;
}

export default AllRoute;
