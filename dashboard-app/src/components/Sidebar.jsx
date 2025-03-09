import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [visible, setVisible] = useState(true); // Sidebar always visible

  return (
    <Sidebar visible={visible} showCloseIcon={false} className="w-64">
      <h2 className="text-xl font-bold p-4">Dashboard</h2>
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <i className="pi pi-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <i className="pi pi-user"></i> Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <i className="pi pi-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </Sidebar>
  );
};

export default SidebarMenu;
