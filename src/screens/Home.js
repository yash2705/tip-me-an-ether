import React from "react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Feed from "../components/Feed";
import HomeHeader from "../components/HomeHeader";
import RightSideBar from "../components/RightSideBar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 overflow-x-hidden md:overflow-x-visible flex flex-col overflow-y-hidden">
      <HomeHeader />
      <div className="pt-20 flex w-full md:max-w-4xl mx-auto flex-1 lg:max-w-6xl">
        <Sidebar />
        <Feed />
        <RightSideBar />
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Home;

// bg-gradient-to-r from-gray-900 via-purple-900 to-purple-700 --- gradient (maybe)

/* <div className="flex-1 flex pt-20 text-white bg-white xl:w-10/12">
  <div className="hidden xl:w-1/4 bg-blue-300"></div>
<div className="flex-1 pt-20 text-white md:hidden bg-white xl:w-1/2 md:w-2/3"></div>
<div className="hidden xl:w-1/4 bg-blue-900"></div>
</div>  */

// bg-gradient-to-r from-violet-800 via-indigo-600 to-cyan-500
