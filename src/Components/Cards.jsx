import React from "react";
import Card from "./Card";
const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card
          width={"w-[35%]"}
          start={false}
          para={true}
          heading="Insight and behind the scenes"
        />
        <Card
          width={"w-[65%]"}
          start={true}
          para={false}
          heading="Let's get to it together."
          hover="true"
        />
      </div>
    </div>
  );
};

export default Cards;
