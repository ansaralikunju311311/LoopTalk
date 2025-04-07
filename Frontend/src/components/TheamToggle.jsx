import React from "react";
import { useDarkMode } from "../context/TheamSwitcher";

const TheamToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default TheamToggle;
