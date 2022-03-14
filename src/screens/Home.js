import React from "react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-violet-800 via-indigo-600 to-cyan-500 min-h-screen  overflow-x-hidden md:overflow-x-visible flex flex-col">
      <HomeHeader />
      {/* Main Content */}
      <div className="flex-1 pt-20 text-white md:hidden bg-white"></div>
      <div className="hidden md:flex md:flex-1 xl:hidden">
        <div className="w-1/3 bg-blue-300"></div>
        <div className="w-2/3 bg-blue-900"></div>
      </div>
      <div className="hidden xl:flex xl:flex-1 w-10/12 mx-auto">
        <div className="w-1/4 bg-blue-300"></div>
        <div className="w-1/2 bg-blue-900"></div>
        <div className="w-1/4 bg-blue-300"></div>
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Home;

// bg-gradient-to-r from-gray-900 via-purple-900 to-purple-700 --- gradient (maybe)
