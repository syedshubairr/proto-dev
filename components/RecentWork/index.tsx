import { Avatars, RecentWorkArrow } from "@/assets";
import Image from "next/image";
import React from "react";

const RecentWork = () => {
  return (
    <div className="flex justify-evenly items-start">
      <div>
        <Image src={RecentWorkArrow} alt="recentWorks" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image src={Avatars} alt="peoples" width="120" height="120" />
        <p className="text-sm">loved by founders worldwide</p>
      </div>
      <div>
        <Image src={RecentWorkArrow} alt="recentWorks" />
      </div>
    </div>
  );
};

export default RecentWork;
