import { motion } from "framer-motion";
import React from "react";

const Marque = ({ imagesUrls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 pr-40 py-8 gap-40 overflow-hidden"
      >
        {imagesUrls.map((url) => (
          <img src={url} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="flex flex-shrink-0 pr-40 py-8 gap-40 overflow-hidden"
      >
        {imagesUrls.map((url) => (
          <img src={url} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
