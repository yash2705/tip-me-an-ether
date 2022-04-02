import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import Dropdown from "./Dropdown";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Link to="/home">
        <img
          src="https://ethereum.org/static/4d030a46f561e5c754cabfc1a97528ff/843b6/impact_transparent.png"
          alt="Tip Me An Ether"
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

const styles = {
  wrapper: `flex justify-between w-screen px-4 py-2 z-40 items-center md:px-12 shadow-sm bg-white fixed left-0 right-0 top-0`,
  logo: `h-14 p-1 ml-2 md:h-16 cursor-pointer`,
  menuButton: `rounded-full p-2 mr-3 mt-2 mb-2 hover:cursor-pointer font-bond text-xl shadow-sm bg-slate-200 text-black flex items-center space-x-2`,
  avatar: `rounded-full h-8`,
};

export default HomeHeader;
