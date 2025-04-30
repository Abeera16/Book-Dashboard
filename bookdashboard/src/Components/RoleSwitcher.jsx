import React, { useContext } from "react";
import { RoleContext } from "../RoleContext";

const RoleSwitcher = () => {
  const { role, toggleRole } = useContext(RoleContext);

  return (
    <div>
      <p>Current Role: <strong>{role}</strong></p>
      <button className="role-switch-btn" onClick={toggleRole}>
        Switch to {role === "user" ? "Admin" : "User"}
      </button>
    </div>
  );
};

export default RoleSwitcher;
