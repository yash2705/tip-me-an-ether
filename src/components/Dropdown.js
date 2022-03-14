import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const styles = {
    wrapper: `fixed top-16 right-8 md:right-16 lg:right-16 bg-sky-200 text-xl rounded-xl divide-y divide-sky-100 md:top-[72px] shadow-md`,
    topContainer: `text-black font-medium`,
    optionTop: `hover:bg-sky-300 hover:cursor-pointer py-2 px-6 rounded-t-xl`,
    option: `hover:bg-sky-300 py-2 px-6`,
    logout: `py-2 px-6 cursor-pointer text-slate-500 hover:text-slate-700 font-medium`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <Link to="/home">
          <div className={styles.optionTop}>View My Page</div>
        </Link>
        <Link to="/dashboard">
          <div className={styles.option}>Dashboard</div>
        </Link>
        <Link to="/explore">
          <div className={styles.option}>Explore</div>
        </Link>
        <Link to="/faq">
          <div className={styles.option}>FAQ</div>
        </Link>
      </div>
      <div className={styles.logout}>Log out</div>
    </div>
  );
};

export default Dropdown;
