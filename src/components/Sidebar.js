import React from "react";
import { VscGraph, VscHome } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlinePersonSearch, MdOutlinePostAdd } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
const Sidebar = () => {
  const styles = {
    options: `py-1 hover:font-semibold hover:cursor-pointer text-slate-600 hover:text-black flex items-center space-x-2 text-lg px-2`,
    selectedOption: `py-1 text-black flex items-center space-x-2 text-lg hover:cursor-pointer font-semibold bg-slate-200 rounded-lg px-2`,
  };

  return (
    <div className="hidden md:w-1/3 p-4 space-y-3 md:flex md:flex-col my-auto lg:w-3/12">
      <div className="flex items-center justify-center">
        <img
          src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2022/03/Ku9UuZjzK6jS6wbr.jpg@300w_0e.webp"
          alt="Profile"
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div className="text-center text-lg font-bold">Username</div>
      <div className="flex p-4 space-x-2">
        <div className="w-1/2 bg-yellow-300 rounded-full py-1 flex items-center justify-center hover:cursor-pointer hover:font-semibold space-x-1 text-lg">
          <IoCreateOutline />
          <span>Post</span>
        </div>
        <div className="w-1/2 bg-slate-200 text-center rounded-full py-1 flex items-center justify-center hover:cursor-pointer hover:font-semibold space-x-1 text-lg">
          <MdOutlinePersonSearch />
          <span>Explore</span>
        </div>
      </div>
      <hr></hr>
      <div className="space-y-1 px-4">
        <div className={styles.selectedOption}>
          <VscHome />
          <span>Creators I Follow</span>
        </div>
        <div className={styles.options}>
          <BsImages />
          <span>My Posts</span>
        </div>
        <div className={styles.options}>
          <MdOutlinePostAdd />
          <span>Create</span>
        </div>
      </div>
      <div className="px-4 space-y-1">
        <span className="text-xs text-black font-medium ">
          CREATOR DASHBOARD
        </span>
        <div className={styles.options}>
          <VscGraph />
          <span>Dashboard</span>
        </div>
        <div className={styles.options}>
          <FaQuestion />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
