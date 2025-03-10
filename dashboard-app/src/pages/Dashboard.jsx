import React from "react";
import { Button } from 'primereact/button';

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Welcome to Dashboard</h2>
        <Button label="Click Me" className="p-button-success" />
      </div>
    </div>
  );
};

export default Dashboard;
