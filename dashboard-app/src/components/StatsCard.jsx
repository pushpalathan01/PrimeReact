import React from "react";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center space-x-4">
      <div className="text-4xl text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{title}</h3>
        <p className="text-xl font-bold text-gray-900 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
