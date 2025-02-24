import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";

const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Create-Test",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/create-test",
  },
];

export default allNav;
