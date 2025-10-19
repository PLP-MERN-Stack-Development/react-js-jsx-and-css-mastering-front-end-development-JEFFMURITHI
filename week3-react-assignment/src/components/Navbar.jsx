import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`p-4 flex justify-between items-center transition-all duration-500 ${
        theme === "light"
          ? "bg-blue-600 text-white"
          : "bg-gray-900 text-yellow-300"
      }`}
    >
      <h1 className="text-xl font-bold">Task Manager</h1>

      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/tasks" className="hover:underline">
          Tasks
        </Link>
        <Link to="/api" className="hover:underline">
          API Data
        </Link>
        <button
          onClick={toggleTheme}
          className={`px-3 py-1 rounded-md font-semibold border transition-all duration-300 ${
            theme === "light"
              ? "bg-white text-blue-600 hover:bg-gray-200"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          {theme === "light" ? "Dark 🌙" : "Light ☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
