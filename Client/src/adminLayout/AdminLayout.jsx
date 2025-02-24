import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

function AdminLayout() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className=" bg-bgmain w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className=" ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
