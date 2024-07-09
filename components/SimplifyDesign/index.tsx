import {
  Figma,
  Simplify1,
  Simplify2,
  Simplify3,
  Slack,
  Trello,
  Twitter,
} from "@/assets";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const SimplifyDesign = () => {
  return (
    <div className="container mx-auto max-w-4xl justify-center pt-20">
      <div className="text-center">
        <p className="font-bold text-5xl pb-6">Simplify Your Design</p>
        <p className="font-light">
          Say goodbye to traditional design. Welcome to the design you&apos;ve
          always wanted.
        </p>
      </div>
      <div className="flex justify-between pt-14 items-center w-full">
        <div className="flex flex-col text-center justify-center w-1/3 items-center">
          <div className="w-full flex justify-center items-center">
            <Image src={Simplify1} alt="simplify1" className="w-24 h-24" />
          </div>
          <p className="py-8">Choose a plan and request unlimited designs</p>
        </div>
        <div className="flex flex-col text-center justify-center w-1/3">
          <div className="w-full flex justify-center items-center">
            <Image
              src={Simplify2}
              alt="simplify2"
              className="justify-center w-24 h-24"
            />
          </div>
          <p className="py-8">
            Get your design delivered in an average of two business days.
          </p>
        </div>
        <div className="flex flex-col text-center justify-center w-1/3">
          <div className="w-full flex justify-center items-center">
            <Image
              src={Simplify3}
              alt="simplify3"
              className="justify-center w-24 h-24"
            />
          </div>
          <p className="py-8">
            Enjoy unlimited revision until you&apos;re completely satisfied.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Button className="relative h-10 px-16 py-2 w-40 overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform hover:-translate-y-10">
            <div className="h-10 flex items-center justify-center">
              <span>Book a 20 mins call</span>
            </div>
            <div className="h-10 flex items-center justify-center">
              <span>Lets Chat</span>
            </div>
          </div>
        </Button>
      </div>
      <div className="flex justify-center gap-2 items-center text-xs py-6">
        <div className="flex gap-2">
          <p>Communication via Slack</p>
          <span>
            <Image src={Slack} alt="Slack" />
          </span>
        </div>
        <Image src={Twitter} alt="Logo" width="15" height="15" />
        <div className="flex gap-2">
          <p>Manage on Trello</p>
          <span>
            <Image src={Trello} alt="Trello" />
          </span>
        </div>
        <span>
          <Image src={Twitter} alt="Logo" width="15" height="15" />
        </span>
        <div className="flex gap-2">
          <p>Delivered in Figma</p>
          <span>
            <Image src={Figma} alt="Figma" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SimplifyDesign;
