import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
const Products = () => {
  let products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-20 relative">
      {products.map((product, idx) => {
        return <Product key={idx} val={product} mover={mover} index={idx} />;
      })}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-[32rem] absolute left-[44%] -translate-x-[50%] h-[23rem] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-[23rem]"
          >
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              src="./public/Arqitel project video 4_3.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-[23rem]"
          >
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              src="./public/webflow-education-promo.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-[23rem]"
          >
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              src="./public/YIR website 2022 4_3_VP9.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            className="w-full h-[23rem]"
          >
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              src="./public/TTR project video 4_3_H.264.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
