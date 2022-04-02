import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img
          src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png"
          alt="Tip Me An Ether"
          className={styles.logo}
        />
      </Link>
      <Link to="/">
        <div className={styles.login}>Home</div>
      </Link>
    </div>
  );
};

const styles = {
  wrapper: `flex justify-between w-screen text-black px-4 py-2 z-40 items-center md:px-12 shadow-sm bg-white`,
  logo: `h-12 md:h-16 p-1 ml-2 cursor-pointer`,
  login: `rounded-full p-2 mt-2 mb-2 mr-2 border border-black hover:cursor-pointer font-medium md:hover:scale-110 transition duration-100 ease-out md:text-lg`,
};

export default LoginHeader;
