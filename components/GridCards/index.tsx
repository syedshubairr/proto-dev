import React from "react";
import GridCard from "../GridCard";
import { Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6 } from "@/assets";

const GridCards = () => {
  return (
    <div className="container mx-auto max-w-6xl justify-center">
      <div className="grid grid-cols-3 gap-7">
        <div>
          <GridCard
            width="100%"
            height="60%"
            name="Diana K."
            position="CEO & Co-Founder of ALMAX"
            content="Some websites we've transformed that drive crazy results for our clients. Some websites we've transformed that drive crazy results for our clients."
            content2="websites we've transformed that drive crazy results for our clients."
            icon={Avatar1}
          />
          <GridCard
            width="100%"
            height="40%"
            name="Brian Regienczuk"
            position="CEO of Agency Spotter"
            content="Some websites we've transformed that drive crazy results for our clients. Some websites we've transformed that drive crazy results for our clients."
            icon={Avatar2}
          />
        </div>
        <div>
          <GridCard
            width="100%"
            height="40%"
            name="Valerie Griggs"
            position="Founder of Restore Agency"
            content="Some websites we've transformed that drive crazy results for our clients. Some websites we've transformed that drive crazy results for our clients."
            icon={Avatar3}
          />
          <GridCard
            width="100%"
            height="60%"
            name="Jannika Pipkins"
            position="CEO of Theos Design Agency"
            content="Some websites we've transformed that drive crazy results for our clients. Some websites we've transformed that drive crazy results for our clients."
            content2="websites we've transformed that drive crazy results for our clients."
            icon={Avatar4}
          />
        </div>
        <div>
          <GridCard
            width="100%"
            height="60%"
            name="Kirill Lazarev"
            position="Kirill Lazarev"
            content="Some websites we've transformed that drive crazy results for our clients. Some websites we've transformed that drive crazy results for our clients."
            content2="websites we've transformed that drive crazy results for our clients."
            icon={Avatar5}
          />
          <GridCard
            width="100%"
            height="40%"
            name="John Hill"
            position="Founder of Aztek"
            content="Some websites we've transformed that drive crazy results for our clients. Some websites we've transformed that drive crazy results for our clients."
            icon={Avatar6}
          />
        </div>
      </div>
    </div>
  );
};

export default GridCards;
