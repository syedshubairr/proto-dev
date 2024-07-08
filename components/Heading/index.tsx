import React from "react";
import { Button } from "../ui/button";
const Heading = () => {
  return (
    <div className="max-w-4xl container mx-auto justify-center text-center">
      <h1 className="font-bold text-5xl pt-20">
        <p>Turn Visitors into Customers with High Converting Website</p>
        {/* <p>Turn Visitors into Customers</p> */}
        {/* <p>with High Converting Website</p> */}
      </h1>
      <p className="text-slate-400 break-normal py-7">
        Transform your website into a{" "}
        <span className="text-black font-semibold">
          relentless sales engine that operates 24/7
        </span>
        , effortlessly converting visitors into{" "}
        <span className="text-black font-semibold">
          loyal customers and driving sales on autopilot
        </span>
        .
      </p>
      <Button>Book a 20 min call</Button>
      <div className="flex w-full justify-center items-center py-2.5">
        <span className="relative flex h-3 w-3 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <p className="text-sm">New Slots Available for this month</p>
      </div>
    </div>
  );
};

export default Heading;
