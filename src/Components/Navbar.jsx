import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="n-left flex items-center">
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "About", "Culture", "", "News"].map((elem, idx) =>
            elem.length == 0 ? (
              <span className="w-[2px] h-5 bg-zinc-700"></span>
            ) : (
              <a
                className="nav-link text-sm flex items-center gap-[3.5px]"
                href="#"
              >
                {idx === 1 ? (
                  <span
                    style={{ boxShadow: "0px -2px 5px #00FF19" }}
                    className="inline-block w-[5px] h-[5px] rounded-full bg-green-500"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
