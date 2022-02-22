import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const styles = {
    wrapper: `flex justify-between rounded-full lg:w-3/4 lg:mx-auto md:sticky md:top-4 md:bg-violet-600 md:mx-4 md:drop-shadow-lg text-white p-4 md:p-0 z-40 items-center`,
    rightSection: `flex items-center`,
    button: `rounded-full p-2 mt-2 mb-2 ml-2 hover:bg-purple-600 hover:cursor-pointer font-medium md:m-3 hover:md:bg-purple-500`,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer`,
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Link to="/">
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
            alt="Ether"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Link to="/faq">
          <div className={styles.button}>FAQ</div>
        </Link>
        <Link to="/login">
          <div className={styles.button}>Log in</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
