import React from "react";
import { FiYoutube, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const Footer = () => {
  const styles = {
    wrapper: `md:flex md:items-center mx-auto w-2/3 md:w-3/5 `,
    icon: `text-cyan-300 w-12 h-6 hover:scale-125 transition duration-500 ease-in-out hover:cursor-pointer`,
    optionsContainer: `w-2/3 justify-around flex mx-auto md:w-3/5 md:mx-0 md:justify-start md:space-x-6`,
    option: `hover:cursor-pointer text-lg font-medium text-cyan-300 hover:text-slate-300`,
    iconsContainer: `flex p-4 w-full justify-center md:w-2/5 md:mx-0 md:justify-end`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.optionsContainer}>
        <div className={styles.option}>About</div>
        <div className={styles.option}>Terms</div>
        <div className={styles.option}>Privacy</div>
      </div>
      <div className={styles.iconsContainer}>
        <FiFacebook className={styles.icon} />
        <FiTwitter className={styles.icon} />
        <FiInstagram className={styles.icon} />
        <FiYoutube className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;
