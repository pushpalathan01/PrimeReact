import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Navbar = () => {
  const items = [
    { label: "Dashboard", icon: "pi pi-home", url: "/" },
    { label: "Profile", icon: "pi pi-user", url: "/profile" },
    { label: "Settings", icon: "pi pi-cog", url: "/settings" },
  ];

  const start = <span className="text-xl font-bold text-blue-600">MyApp</span>;
  const end = (
    <Button icon="pi pi-sign-out" className="p-button-text p-button-danger" />
  );

  return (
    <div className="shadow-md">
      <Menubar model={items} start={start} end={end} className="p-2" />
    </div>
  );
};

export default Navbar;
