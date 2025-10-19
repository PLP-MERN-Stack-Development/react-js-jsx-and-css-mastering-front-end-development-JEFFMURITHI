import React from "react";
import { useTheme } from "../context/ThemeContext";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default Layout;
