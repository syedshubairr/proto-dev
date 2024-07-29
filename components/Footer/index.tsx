import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { Logo, Twitter } from "@/assets";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <Separator className=" bg-[#747474]" />
      <div className="flex justify-between w-full py-8 items-center">
        <div className="flex-col">
          <Image src={Logo} alt="logo" width={150} height={30} />
          <p className="pt-2 text-[#A3A3A3]">
            © Prodesign 2024. All rights reserved.
          </p>
        </div>
        <div>
          <Image src={Twitter} alt="X" width={31.5} height={28} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
