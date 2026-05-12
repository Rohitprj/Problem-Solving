import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextApi = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }
  getData();
  return (
    <Context.Provider value={{ theme, toggleTheme, data }}>
      {children}
    </Context.Provider>
  );
};

export default ContextApi;
