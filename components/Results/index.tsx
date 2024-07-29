import React from "react";
import Slider from "../Slider";
import { Button } from "../ui/button";
import GridCards from "../GridCards";

const Results = () => {
  return (
    <div className="pt-24">
      <h1 className="container mx-auto max-w-4xl font-semibold text-4xl text-center pb-16">
        We&apos;ve Transformed Websites That Drive Incredible Results for Our
        Clients.
      </h1>
      <Slider />
      <div className="flex w-full justify-center">
        <Button className="relative h-10 px-16 py-2 w-40 overflow-hidden bg-black text-white">
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform hover:-translate-y-10">
            <div className="h-10 flex items-center justify-center bg-black text-white">
              <span>Book a 20 mins call</span>
            </div>
            <div className="h-10 flex items-center justify-center bg-black text-white">
              <span>Lets Chat</span>
            </div>
          </div>
        </Button>
      </div>
      <h1 className="container mx-auto max-w-4xl font-semibold text-4xl text-center pb-12 pt-24">
        Our Happy Partner
      </h1>
      <GridCards />
    </div>
  );
};

export default Results;
