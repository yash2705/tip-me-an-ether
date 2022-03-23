import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import LoginHeader from "../components/LoginHeader";

const SignUp = () => {
  return (
    <div className="bg-slate-100 h-screen overflow-x-hidden md:overflow-x-visible flex flex-col">
      <LoginHeader />
      <Form />
      <Footer />
    </div>
  );
};

export default SignUp;
