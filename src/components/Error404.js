import React from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";

const Error404 = () => {
  const { isAuthenticated } = useMoralis();

  return (
    <div className={styles.wrapper}>
      <span className={styles.boldText}>404</span>
      <span className={styles.mediumText}>
        The page you are looking for does not exist.
      </span>
      <Link to={isAuthenticated ? "/home" : "/"}>
        <div className={styles.button}>Go back to Home</div>
      </Link>
    </div>
  );
};

const styles = {
  wrapper: `flex flex-col items-center`,
  boldText: `font-bold text-9xl md:text-[250px] lg:text-[300px] text-black`,
  mediumText: `text-slate-700 text-lg font-medium md:text-2xl lg:text-3xl`,
  button: `hover:cursor-pointer hover:px-5 duration-300 hover:font-bold font-semibold transition ease-in-out px-4 py-2 md:px-6 lg:px-8 border-black border-2 mt-2 md:mt-4 lg:mt-6 rounded-full md:text-lg lg:text-xl md:hover:px-7 lg:hover:px-9`,
};

export default Error404;
