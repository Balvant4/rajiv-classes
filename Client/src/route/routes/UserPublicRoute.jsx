import About from "../../views/user/About";
import Blog from "../../views/user/Blog";
import Home from "../../views/user/Home";
import Service from "../../views/user/Service";

const UserPublicRoute = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
  },
  {
    path: "/about",
    element: <About />,
    label: "About",
  },
  {
    path: "/services",
    element: <Service />,
    label: "Services",
  },
  {
    path: "/blog",
    element: <Blog />,
    label: "Blog",
  },
];

export default UserPublicRoute;
