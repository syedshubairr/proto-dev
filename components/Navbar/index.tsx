import { Logo } from "@/assets/index";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex w-full container mx-auto justify-between items-center py-5">
      <div className="hidden md:flex font-semibold">
        <p className="pr-4">How it Works</p>
        <p className="pr-4">Work</p>
        <p className="pr-4">Pricing</p>
        <p>FAQ</p>
      </div>
      <Image src={Logo} alt="ProtoDev" width="200" height="200" />
      <div className="font-semibold">
        <Button className="py-[15px] px-[30px] bg-black text-white">
          Book a 20 min call
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
