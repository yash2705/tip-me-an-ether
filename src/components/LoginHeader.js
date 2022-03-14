import React from "react";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  const styles = {
    wrapper: `flex justify-between w-screen text-white px-4 py-2 z-40 items-center md:px-12 shadow-md md:shadow-none `,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer md:h-12`,
    login: `rounded-full p-2 mt-2 mb-2 mr-2 border hover:cursor-pointer font-medium md:m-3 hover:scale-110 transition duration-200 ease-out md:text-lg`,
  };
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
          alt="Ether"
          className={styles.logo}
        />
      </Link>
      <Link to="/">
        <div className={styles.login}>Home</div>
      </Link>
    </div>
  );
};

export default LoginHeader;
