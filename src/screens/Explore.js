import React from "react";
import HomeHeader from "../components/HomeHeader";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Sidebar from "../components/Sidebar";
import ExploreCreatorCard from "../components/ExploreCreatorCard";

const Explore = () => {
  return (
    <div className="min-h-screen bg-slate-100 overflow-x-hidden md:overflow-x-visible flex flex-col overflow-y-hidden">
      <HomeHeader />
      <div className="pt-20 flex w-full md:max-w-4xl mx-auto flex-1 lg:max-w-6xl">
        <Sidebar selectedOption="EXPLORE" />
        <ExploreCreatorCard />
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Explore;
