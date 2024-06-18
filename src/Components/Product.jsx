import React from "react";
import Button from "./Button";
const Product = ({ val, mover, index }) => {
  return (
    <div className="w-full py-20 text-white h-[23rem]">
      <div onMouseEnter={()=>{mover(index)}} className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-5xl font-semibold">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-xl font-[300] w-[80%]">{val.description}</p>
          <Button title_text="Live Website" />
        </div>
      </div>
    </div>
  );
};

export default Product;
