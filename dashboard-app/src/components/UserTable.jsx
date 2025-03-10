import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const UserTable = ({ users }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">User List</h3>
      <DataTable value={users} className="p-datatable-sm">
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="role" header="Role"></Column>
      </DataTable>
    </div>
  );
};

export default UserTable;
