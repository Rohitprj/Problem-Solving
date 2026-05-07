import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextApi = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return;
  <Context.Provider value={{ theme, toggleTheme }}>
    {children}
  </Context.Provider>;
};

export default ContextApi;
