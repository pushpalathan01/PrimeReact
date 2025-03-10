import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar (Controlled by Navbar) */}
      <SidebarMenu visible={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 w-full">
        {/* Navbar (Pass toggle function to open sidebar) */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(true)} />

        {/* Page Content */}
        <main className="p-4 flex-1 overflow-auto">{children}</main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
