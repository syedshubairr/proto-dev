import React, { FC } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CardProps } from "./types";
import Image from "next/image";
import { shock, shock_white } from "@/assets";

const Card: FC<CardProps> = ({ popular }) => {
  return (
    <div
      className={`flex flex-col border-[#d6d6d6] border-2 rounded-2xl px-8 pt-5 pb-8 max-w-[404px] h-[594px] md:h-[500px] justify-between ${
        popular && "bg-black text-white"
      } `}
    >
      {popular ? (
        <div className="flex justify-between items-center">
          <p className="py-3">One-off</p>
          <p className="bg-white text-black rounded-xl justify-center items-center uppercase text-[10px] py-1 px-1.5 font-semibold">
            Most Popular
          </p>
        </div>
      ) : (
        <p className="py-3">One-off</p>
      )}
      <h1 className="font-semibold text-2xl">$150/mo</h1>
      <p className="font-light text-[10px] py-4">
        High-converting landing page, Branding, Copy
      </p>
      <p className="text-xs hyphens-auto">
        Perfect for single, high-compact, conversion focused landing page.
      </p>
      <Separator className="my-4 bg-black" />
      <ul>
        <li className="flex items-center gap-2">
          <span>
            <Image
              src={popular ? shock_white : shock}
              height={8}
              width={8}
              alt="shock"
            />
          </span>
          1x Product Designer at your service
        </li>
        <li className="flex items-center gap-2">
          <span>
            <Image
              src={popular ? shock_white : shock}
              height={8}
              width={8}
              alt="shock"
            />
          </span>
          High-converting copy
        </li>
        <li className="flex items-center gap-2">
          <span>
            <Image
              src={popular ? shock_white : shock}
              height={8}
              width={8}
              alt="shock"
            />
          </span>
          Branding + Product Design
        </li>
        <li className="flex items-center gap-2">
          <span>
            <Image
              src={popular ? shock_white : shock}
              height={8}
              width={8}
              alt="shock"
            />
          </span>
          Slack + Trello ticketing system
        </li>
        <li className="flex items-center gap-2">
          <span>
            <Image
              src={popular ? shock_white : shock}
              height={8}
              width={8}
              alt="shock"
            />
          </span>
          Daily design support
        </li>
        <li className="flex items-center gap-2">
          <span>
            <Image
              src={popular ? shock_white : shock}
              height={8}
              width={8}
              alt="shock"
            />
          </span>
          Updates delivered every 48 hours
        </li>
      </ul>
      <div className="flex justify-center pt-4">
        <Button className="relative h-10 px-16 py-2 w-full overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-300 ease-in-out transform hover:-translate-y-10">
            <div
              className={`h-10 flex items-center justify-center ${
                popular ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span>Get Started Today</span>
            </div>
            <div
              className={`h-10 flex items-center justify-center ${
                popular ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span>Book a 20 min call</span>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
