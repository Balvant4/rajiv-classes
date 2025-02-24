import Testimonials2 from "../../components/Testimonials2";
import About from "../../views/user/About";
import Blog from "../../views/user/Blog";
import ContactUs from "../../views/user/ContactUs";
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
    path: "/contact",
    element: <ContactUs />,
    label: "Contact",
  },
  {
    path: "/wall-of-love",
    element: <Testimonials2 />,
  },
];

export default UserPublicRoute;
