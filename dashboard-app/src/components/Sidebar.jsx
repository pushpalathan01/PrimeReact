import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";

const SidebarMenu = ({ visible, onClose }) => {
  return (
    <Sidebar
      visible={visible}
      onHide={onClose}
      showCloseIcon={true}
      className="w-64 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold p-4 text-gray-800 dark:text-gray-100">Dashboard</h2>
      <ul className="space-y-4 p-4">
        <li>
          <Link to="/" className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400">
            <i className="pi pi-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400">
            <i className="pi pi-user"></i> Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400">
            <i className="pi pi-cog"></i> Settings
          </Link>
        </li>
      </ul>
    </Sidebar>
  );
};

export default SidebarMenu;
