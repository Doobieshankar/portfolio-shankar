import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 mt-12 flex items-center justify-center dark:bg-black">
      <p className="font-open-sans text-sm font-light text-gray-700 dark:text-gray-300">
        Copyright &copy; {new Date().getFullYear()} Shankar D
      </p>
    </div>
  );
};

export default Footer;
