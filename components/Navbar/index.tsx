import { Logo } from "@/assets/index";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex w-full container mx-auto justify-between items-center py-5">
      <div className="flex font-semibold">
        <p className="pr-4">How it Works</p>
        <p className="pr-4">Work</p>
        <p className="pr-4">Pricing</p>
        <p>FAQ</p>
      </div>
      <div className="font-semibold">
        <Image src={Logo} alt="ProtoDev" width="200" height="200" />
      </div>
      <div className="font-semibold">
        <Button>Book a 20 min call</Button>
      </div>
    </div>
  );
};

export default Navbar;
