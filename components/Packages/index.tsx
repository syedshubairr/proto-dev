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
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
        <Card />
        <Card popular />
        <Card />
      </div>
    </div>
  );
};

export default Packages;
