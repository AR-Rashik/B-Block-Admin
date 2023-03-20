import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gradient-to-r hover:from-lime-500  hover:to-emerald-500 text-white transition-colors duration-200 transform ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
