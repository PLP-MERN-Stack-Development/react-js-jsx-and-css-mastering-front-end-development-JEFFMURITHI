import React from "react";

const Button = ({ variant = "primary", children, onClick }) => {
  const baseStyle = "px-4 py-2 m-2 text-center rounded-md font-semibold transition duration-200";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
