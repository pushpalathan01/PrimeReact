import React from "react";

const RecentActivity = () => {
  const activities = [
    { id: 1, text: "John Doe signed up", time: "2 mins ago" },
    { id: 2, text: "Payment received from Alice", time: "10 mins ago" },
    { id: 3, text: "Server restarted", time: "1 hour ago" }
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Recent Activity</h3>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="flex justify-between text-gray-700 dark:text-gray-300">
            <span>{activity.text}</span>
            <small className="text-gray-500">{activity.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
