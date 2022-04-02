import React from "react";
import { VscGraph, VscHome } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlinePersonSearch, MdOutlinePostAdd } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ selectedOption }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatarContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
          alt="Profile"
          className={styles.avatar}
        />
      </div>
      <div className={styles.username}>Username</div>
      <div className={styles.postExploreContainer}>
        <div className={styles.postButton}>
          <Link
            to="/posts/new"
            className="flex justify-center items-center space-x-2"
          >
            <IoCreateOutline />
            <span>Post</span>
          </Link>
        </div>
        <div className={styles.exploreButton}>
          <Link
            to="/explore"
            className="flex justify-center items-center space-x-2"
          >
            <MdOutlinePersonSearch />
            <span>Explore</span>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className={styles.container}>
        <Link to="/home">
          <div
            className={`${
              selectedOption === "HOME" ? styles.selectedOption : styles.options
            }`}
          >
            <VscHome />
            <span>Creators I Follow</span>
          </div>
        </Link>
        <Link to="/posts">
          <div
            className={`${
              selectedOption === "POSTS"
                ? styles.selectedOption
                : styles.options
            }`}
          >
            <BsImages />
            <span>My Posts</span>
          </div>
        </Link>
        <Link to="/posts/new">
          <div
            className={`${
              selectedOption === "CREATE"
                ? styles.selectedOption
                : styles.options
            }`}
          >
            <MdOutlinePostAdd />
            <span>Create</span>
          </div>
        </Link>
      </div>
      <div className={styles.container}>
        <span className={styles.text}>CREATOR DASHBOARD</span>
        <Link to="/dashboard">
          <div
            className={`${
              selectedOption === "DASHBOARD"
                ? styles.selectedOption
                : styles.options
            }`}
          >
            <VscGraph />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/faq">
          <div
            className={`${
              selectedOption === "FAQ" ? styles.selectedOption : styles.options
            }`}
          >
            <FaQuestion />
            <span>FAQ</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `hidden md:w-1/3 p-4 space-y-3 md:flex md:flex-col my-auto lg:w-3/12`,
  avatarContainer: `flex items-center justify-center`,
  avatar: `h-16 w-16 rounded-full`,
  username: `text-center text-lg font-bold`,
  postExploreContainer: `flex p-4 space-x-2`,
  postButton: `w-1/2 bg-yellow-300 rounded-full py-1 lg:p-2 flex items-center justify-center hover:cursor-pointer hover:font-semibold space-x-1 text-lg`,
  exploreButton: `w-1/2 bg-slate-200 text-center rounded-full py-1 flex items-center justify-center hover:cursor-pointer hover:font-semibold space-x-1 text-lg lg:px-2`,
  container: `space-y-1 px-4`,
  text: `text-xs text-black font-medium`,
  options: `py-1 hover:font-semibold hover:cursor-pointer text-slate-600 hover:text-black flex items-center space-x-2 text-lg px-2`,
  selectedOption: `py-1 text-black flex items-center space-x-2 text-lg hover:cursor-pointer font-semibold bg-slate-200 rounded-lg px-2`,
};

export default Sidebar;
