import { solution1, solution2, solution3 } from "@/assets";
import Image from "next/image";
import React from "react";

const PerfectSolution = () => {
  return (
    <div className="max-w-7xl container mx-auto justify-center rounded-xl bg-black text-white">
      <div className="flex flex-col text-center w-full">
        <p className="text-4xl py-16 font-semibold">
          A Perfect Solution For Your Business
        </p>
        <p className="flex font-light text-center w-full justify-center">
          <span className="max-w-2xl">
            Imagine a website that works as your non-stop sales powerhouse,
            turning visitors into customers around the clock. Business opt for
            us because:
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center text-center py-8 w-full gap-4">
        <div className="flex-col justify-center px-8">
          <div className="flex w-full justify-center">
            <Image src={solution1} alt="solution1" width={35} height={35} />
          </div>
          <p className="text-xl font-semibold py-3">Captivating Copywriting</p>
          <p className="font-light">
            Creating compelling copy that captivate, resonate and drive your
            audience to act.
          </p>
        </div>
        <div className="flex-col justify-center px-8">
          <div className="flex w-full justify-center">
            <Image src={solution2} alt="solution1" width={30} height={30} />
          </div>
          <p className="text-xl font-semibold py-3">Captivating Copywriting</p>
          <p className="font-light">
            Creating compelling copy that captivate, resonate and drive your
            audience to act.
          </p>
        </div>
        <div className="flex-col justify-center px-8">
          <div className="flex w-full justify-center">
            <Image src={solution3} alt="solution1" width={40} height={40} />
          </div>
          <p className="text-xl font-semibold py-3">Captivating Copywriting</p>
          <p className="font-light">
            Creating compelling copy that captivate, resonate and drive your
            audience to act.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerfectSolution;
