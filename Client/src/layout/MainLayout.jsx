import { Outlet } from "react-router-dom";
import Header from "./Header";

function MainLayout() {
  return (
    <div className=" bg-bgmain w-full min-h-screen">
      <Header />
      <div className=" ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
