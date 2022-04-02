import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = () => {
  const { logout, isAuthenticated } = useMoralis();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) return navigate("/");
  }, [isAuthenticated, navigate]);

  const logOut = () => {
    logout();
    return navigate("/");
  };
  const styles = {
    wrapper: `fixed right-8 md:right-16 lg:right-16 bg-white text-xl rounded-xl divide-y divide-sky-100 top-[86px] shadow-md`,
    topContainer: `text-black font-medium`,
    optionTop: `hover:bg-slate-200 hover:cursor-pointer py-2 px-6 rounded-t-xl`,
    option: `hover:bg-slate-200 py-2 px-6`,
    logout: `py-2 px-6 cursor-pointer text-slate-500 hover:text-slate-700 font-medium`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <Link to="/home">
          <div className={styles.optionTop}>View My Page</div>
        </Link>
        <Link to="/dashboard">
          <div className={styles.option}>Dashboard</div>
        </Link>
        <Link to="/explore">
          <div className={styles.option}>Explore</div>
        </Link>
        <Link to="/faq">
          <div className={styles.option}>FAQ</div>
        </Link>
      </div>
      <div className={styles.logout} onClick={logOut}>
        Log out
      </div>
    </div>
  );
};

export default Dropdown;
