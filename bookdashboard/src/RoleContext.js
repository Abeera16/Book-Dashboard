import React, { createContext, useState } from "react";

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("user"); // default role

  const toggleRole = () => {
    setRole(prev => (prev === "user" ? "admin" : "user"));
  };

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
};
