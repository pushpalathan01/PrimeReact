import React from "react";
import Navbar from "../components/Navbar";
import ThemeSwitcher from "../components/ThemeSwitcher";
import SidebarMenu from "../components/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarMenu />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <ThemeSwitcher />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
