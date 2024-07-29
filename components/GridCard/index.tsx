import React, { FC } from "react";
import { GridCardProps } from "./types";
import { Separator } from "../ui/separator";
import Image from "next/image";

const GridCard: FC<GridCardProps> = ({
  width,
  height,
  content,
  content2,
  icon,
  name,
  position,
}) => {
  return (
    <div
      className={`w-[${width}] h-[${height}] text-black bg-white rounded-3xl shadow-xl p-5 my-6`}
    >
      <div>{content}</div>
      <div className={`${content2 ? "flex" : "hidden"}`}>
        <br />
        {content2}
      </div>
      <Separator className="my-3" />
      <div className="flex items-center gap-3">
        <Image
          alt="avatar"
          src={icon}
          width={100}
          height={100}
          loading="lazy"
          quality={100}
          className="border-white border-2 rounded-full w-[43px] h-[43px] shadow-xl"
        />
        <div className="flex-col">
          <p className="text-black">{name}</p>
          <p className="text-[12px] text-[#333333]">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
