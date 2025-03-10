import React from "react";
import StatsCard from "../components/StatsCard";
import RecentActivity from "../components/RecentActivity";
import UserTable from "../components/UserTable";
import Breadcrumbs from "../components/Breadcrumbs";
import { FiUsers, FiDollarSign } from "react-icons/fi";

const users = [
  { name: "John Doe", email: "john@example.com", role: "Admin" },
  { name: "Alice Smith", email: "alice@example.com", role: "User" }
];

const Dashboard = () => {
  const breadcrumbItems = [{ label: "Home" }];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Home</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total Users" value="1,245" icon={<FiUsers />} />
        <StatsCard title="Revenue" value="$8,900" icon={<FiDollarSign />} />
      </div>

      {/* Recent Activity and User Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RecentActivity />
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default Dashboard;
