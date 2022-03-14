import React from "react";
import { VscGraph, VscHome } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BottomNavigationBar = () => {
  const styles = {
    wrapper: `flex items-center justify-around text-sm text-white px-2 w-screen md:hidden shadow-md py-3 fixed bottom-0 left-0 right-0  bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600`,
    optionContainer: `items-center flex flex-col w-1/3`,
    optionLogo: `text-white text-2xl cursor-pointer`,
    optionTitle: `cursor-pointer`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.optionContainer}>
        <Link to="/home">
          <VscHome className={styles.optionLogo} />
        </Link>
        <div className={styles.optionTitle}>Home</div>
      </div>
      <div className={styles.optionContainer}>
        <Link to="/create">
          <IoCreateOutline className={styles.optionLogo} />
        </Link>
        <div className={styles.optionTitle}>Create</div>
      </div>
      <div className={styles.optionContainer}>
        <Link to="/dashboard">
          <VscGraph className={styles.optionLogo} />
        </Link>
        <div className={styles.optionTitle}>Dashboard</div>
      </div>
    </div>
  );
};

export default BottomNavigationBar;

// bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 ---- gradient (maybe)
