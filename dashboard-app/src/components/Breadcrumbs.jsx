import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";

const Breadcrumbs = ({ items }) => {
  const home = { label: "Dashboard", url: "/" };

  return <BreadCrumb model={items} home={home} className="mb-4 bg-white p-3 shadow-md rounded-md" />;
};

export default Breadcrumbs;
