import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#ccc] border-l-transparent border-r-transparent bg-white">
      <div className="container p-12 flex justify-between items-center">
        {/* Logo SVG */}
        <div className="flex items-center space-x-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black"
          >
            <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="4" />
            <text
              x="50%"
              y="54%"
              textAnchor="middle"
              fill="black"
              fontSize="36"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              JP
            </text>
          </svg>
          <span className="text-black font-bold text-xl">Joshua Patriarca</span>
        </div>

        <p className="text-gray-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
