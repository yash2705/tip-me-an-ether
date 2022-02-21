import React from "react";

const Header = () => {
  const styles = {
    wrapper: `flex justify-between rounded-full max-w-6xl lg:mx-auto md:sticky md:top-4 md:bg-violet-600 md:mx-4 md:drop-shadow-lg text-white p-4 md:p-0 z-40`,
    leftSection: `flex items-center`,
    option: `rounded-full p-2 mt-2 mb-2 ml-2 hover:bg-purple-600 hover:cursor-pointer font-medium md:m-3`,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer`,
    login: `rounded-full p-2 mt-2 mb-2 mr-2 hover:bg-indigo-700 hover:cursor-pointer font-medium md:m-3`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
          alt="Ether"
          className={styles.logo}
        />
        <div className={styles.option}>FAQ</div>
        <div className={styles.option}>Explore Creators</div>
      </div>
      <div className={styles.login}>Log in</div>
    </div>
  );
};

export default Header;
