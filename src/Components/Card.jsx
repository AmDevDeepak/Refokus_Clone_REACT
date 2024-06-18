import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para, heading, hover = "false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && '#7443ff', padding: '25px'}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="text-[0.9vw] font-[400] tracking-tight">
            Up Next: News
          </h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl w-[40%] text-semibold mt-8 tracking-tight">
          {heading}
        </h1>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50 font-semibold">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <h1 className="tracking-tight text-[0.9vw] text-zinc-400">
            Explore what drives our team.
          </h1>
        )}
      </div>
    </motion.div>
  );
};
export default Card;
