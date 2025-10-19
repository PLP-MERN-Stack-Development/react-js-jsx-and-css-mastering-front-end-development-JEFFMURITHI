import React, { useContext } from "react";
import { useTheme } from "../context/ThemeContext";

const Card = ({ title, description, children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`shadow-md rounded-lg p-4 transition duration-500 ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      {title && (
        <h3
          className={`text-lg font-bold mb-6 text-center    ${
            theme === "dark" ? "text-white bg-gray-800" : "text-gray-900 bg-white"
          }`}
        >
          {title}
        </h3>
      )}
      {description && (
        <p
          className={`mb-3 ${
            theme === "dark" ? "text-gray-300 bg-gray-800" : "text-gray-600 bg-white"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
