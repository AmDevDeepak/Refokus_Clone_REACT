import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title_text = "Get Started" }) => {
  return (
    <div className="w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-regular">{title_text}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
