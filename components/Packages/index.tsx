import React from "react";
import Card from "../Card";

const Packages = () => {
  return (
    <div className="container mx-auto justify-center max-w-6xl">
      <div className="text-center pt-20 pb-10">
        <h1 className="text-3xl font-semibold">
          Transform Your Vision with Pro Design
        </h1>
      </div>
      <div className="flex justify-center gap-7">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Packages;
