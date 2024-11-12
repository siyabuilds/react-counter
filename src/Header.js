import React, { useEffect, useState } from "react";
import "./App.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Header = () => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const initialIsDarkMode = storedTheme === "dark";
  const [isDarkMode, setDarkMode] = useState(initialIsDarkMode);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    const theme = checked ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    document.body.setAttribute(
      "data-theme",
      initialIsDarkMode ? "dark" : "light"
    );
  }, [initialIsDarkMode]);

  return (
    <header>
      <h1>Basic React Counter</h1>
      <DarkModeSwitch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={30}
        style={{ marginLeft: "auto" }}
      />
    </header>
  );
};

export default Header;
