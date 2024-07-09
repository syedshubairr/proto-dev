import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const Card = () => {
  return (
    <div className="flex flex-col border-black border rounded-xl p-8 max-w-80">
      <p className="py-3">One-off</p>
      <h1 className="font-semibold text-2xl">$150/mo</h1>
      <p className="font-light text-[10px] py-4">
        High-converting landing page, Branding, Copy
      </p>
      <p className="text-xs hyphens-auto">
        Perfect for single, high-compact, conversion focused landing page.
      </p>
      <Separator className="my-4 bg-black" />
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        <li>Milk</li>
        <li>Milk</li>
        <li>Milk</li>
      </ul>
      <div className="flex justify-center pt-4">
        <Button className="relative h-10 px-16 py-2 w-full overflow-hidden">
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
    </div>
  );
};

export default Card;
