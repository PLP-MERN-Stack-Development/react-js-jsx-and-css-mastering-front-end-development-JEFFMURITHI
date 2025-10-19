import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-8">
      <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
