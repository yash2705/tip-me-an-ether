import React from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";

const ExploreCreatorCard = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-4/5 xl:w-7/12 overflow-y-scroll h-[630px] scrollbar-hide pb-16 md:pb-0">
      <div className="text-black font-bold text-3xl p-4 flex items-center w-full lg:text-4xl">
        0% Comissions On All Donations!
      </div>
      <SearchBar />
      <div>
        <div className="font-bold text-slate-600 text-xl pt-4 pl-4">
          Featured Creators
        </div>
        <div className="flex p-4 w-full overflow-x-auto">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
      <div>
        <div className="font-bold text-slate-600 text-xl pt-4 pl-4">
          Featured Creators
        </div>
        <div className="flex p-4 overflow-x-auto">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default ExploreCreatorCard;
