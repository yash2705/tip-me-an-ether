import React from "react";
import { FiInstagram, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import { Link } from "react-router-dom";

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
        <Link to="/about">
          <div className={styles.option}>About</div>
        </Link>
        <Link to="/terms">
          <div className={styles.option}>Terms</div>
        </Link>
        <Link to="/privacy">
          <div className={styles.option}>Privacy</div>
        </Link>
      </div>
      <div className={styles.iconsContainer}>
        <a href="https://github.com/yash2705/tip-me-an-ether" target="blank">
          <FiGithub className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/yash2705/" target="blank">
          <FiLinkedin className={styles.icon} />
        </a>
        <a href="https://www.codechef.com/users/yash2705" target="blank">
          <FiCode className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/yashshah2705/" target="blank">
          <FiInstagram className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
