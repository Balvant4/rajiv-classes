import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
