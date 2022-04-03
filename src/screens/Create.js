import React from "react";
import BottomNavigationBar from "../components/BottomNavigationBar";
import Feed from "../components/Feed";
import HomeHeader from "../components/HomeHeader";
import RightSideBar from "../components/RightSideBar";
import Sidebar from "../components/Sidebar";

import { useMoralis } from "react-moralis";
import CreatePost from "../components/CreatePost";
const Create = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div className="min-h-screen bg-slate-100 overflow-x-hidden md:overflow-x-visible flex flex-col overflow-y-hidden">
      <HomeHeader />
      <div className="pt-20 flex w-full md:max-w-4xl mx-auto flex-1 lg:max-w-6xl">
        <Sidebar selectedOption="CREATE" />
        <CreatePost />
      </div>
      <BottomNavigationBar />
    </div>
  );
};

export default Create;
