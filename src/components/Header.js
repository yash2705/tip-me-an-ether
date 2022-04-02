import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link to="/">
          <img
            src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png"
            alt="Tip Me An Ether"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Link to="/faq">
          <div className={styles.button}>FAQ</div>
        </Link>
        <Link to="/connect">
          <div className={styles.button}>Log in</div>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  wrapper: `flex justify-between rounded-full lg:w-3/4 lg:mx-auto  md:bg-black md:mx-4 md:drop-shadow-lg md:text-white text-black p-4 md:p-0 z-40 items-center`,
  rightSection: `flex items-center`,
  button: `rounded-full p-2 mt-2 mb-2 ml-2 hover:bg-slate-300 hover:cursor-pointer font-medium md:m-3 hover:md:bg-slate-700`,
  logo: `h-12 p-1 ml-2 md:h-14 cursor-pointer`,
};

export default Header;
