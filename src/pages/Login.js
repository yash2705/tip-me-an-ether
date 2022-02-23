import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Login = () => {
  const styles = {
    wrapper: `flex justify-between w-screen text-white px-4 py-2 z-40 items-center md:px-12 shadow-md md:shadow-none `,
    rightSection: `flex items-center`,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer md:h-12`,
    login: `rounded-full p-2 mt-2 mb-2 mr-2 border hover:cursor-pointer font-medium md:m-3 hover:scale-110 transition duration-200 ease-out md:text-lg`,
    text: `hidden md:inline text-slate-300`,
  };

  return (
    <div className="bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600 h-screen overflow-x-hidden md:overflow-x-visible flex flex-col">
      <div className={styles.wrapper}>
        <Link to="/">
          <img
            src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
            alt="Ether"
            className={styles.logo}
          />
        </Link>
        <div className={styles.rightSection}>
          <span className={styles.text}>Already have an account ?</span>
          <Link to="/login">
            <div className={styles.login}>Log in</div>
          </Link>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Login;
