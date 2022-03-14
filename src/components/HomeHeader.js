import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import Dropdown from "./Dropdown";

const HomeHeader = () => {
  const styles = {
    wrapper: `flex justify-between w-screen text-white px-4 py-2 z-40 items-center md:px-12 shadow-md md:shadow-none  bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600 fixed left-0 right-0 top-0`,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer md:h-12`,
    menuButton: `rounded-full p-1 mr-3 mt-2 mb-2 hover:cursor-pointer font-medium md:m-3 md:text-lg shadow-lg bg-sky-200 text-black flex items-center space-x-2 md:space-x-4`,
    avatar: `rounded-full h-8`,
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Link to="/home">
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
          alt="Ether"
          className={styles.logo}
        />
      </Link>
      <div>
        <div
          className={styles.menuButton}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <RiMenuFill />
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
              alt="Avatar"
              className={styles.avatar}
            />
          </div>
        </div>
        {isOpen && <Dropdown />}
      </div>
    </div>
  );
};

export default HomeHeader;
