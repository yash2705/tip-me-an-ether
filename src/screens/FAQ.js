import React from "react";
import HomeHeader from "../components/HomeHeader";
import LoginHeader from "../components/LoginHeader";

const FAQ = () => {
  const loggedIn = false;
  return (
    <div className="bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600 min-h-screen overflow-x-hidden md:overflow-x-visible text-white flex flex-col">
      {loggedIn ? <HomeHeader /> : <LoginHeader />}
    </div>
  );
};

export default FAQ;
