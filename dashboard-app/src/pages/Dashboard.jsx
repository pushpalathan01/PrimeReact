import React from "react";
import { Button } from 'primereact/button';


const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Welcome to Dashboard</h2>
      <Button label="Click Me" className="p-button-success" />
    </div>
  );
};

export default Dashboard;
