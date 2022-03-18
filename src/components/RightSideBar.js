import React from "react";
import CreatorCard from "./CreatorCard";

const RightSideBar = () => {
  return (
    <div className="hidden xl:flex xl:flex-col xl:w-2/12">
      <span className="pt-4 font-bold text-xl text-slate-500">
        FEATURED CREATORS
      </span>
      <hr></hr>
      <div>
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
        <CreatorCard />
      </div>
    </div>
  );
};

export default RightSideBar;
