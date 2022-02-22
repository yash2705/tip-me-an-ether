import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const styles = {
    wrapper: `flex justify-between w-screen text-white px-4 py-2 z-40 items-center md:px-12 shadow-md md:shadow-none`,
    rightSection: `flex items-center`,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer`,
    login: `rounded-full p-2 mt-2 mb-2 mr-2 border hover:cursor-pointer font-medium md:m-3 hover:scale-110 transition duration-200 ease-out`,
    text: `hidden md:inline`,
    input: `bg-transparent border border-2 border-slate-400 outline-none rounded-xl p-2 hover:border-white w-full`,
    form: `text-white space-y-6 text-xl mx-auto md:w-3/5`,
    formContainer: `flex flex-1 mx-auto items-center align-items-center md:w-4/5 max-w-screen-md`,
    button: `rounded-full p-2 hover:bg-purple-600 hover:cursor-pointer font-medium md:m-3 text-center bg-violet-200 text-violet-700 hover:bg-violet-600 hover:text-violet-300`,
    link: `underline underline-offset-4 hover:cursor-pointer font-medium text-md text-white decoration-slate-300 hover:decoration-white`,
    inputContainer: `text-slate-300 flex justify-items-center items-center`,
    checkBox: `form-check-input h-4 w-4 border border-purple-600 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer chcked:text-white`,
    title: `font-bold text-2xl`,
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        <div className={styles.title}>Sign Up. It's Free!</div>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className={styles.input}
            placeholder="Display Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={styles.input}
            placeholder="Email Address"
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            className={styles.checkBox}
          />
          <div>
            I accept the{" "}
            <Link to="/terms">
              <span className={styles.link}>terms</span>
            </Link>{" "}
            and
            <Link to="/privacy">
              <span className={styles.link}> privacy policy</span>
            </Link>
          </div>
        </div>
        <div className={styles.button}>Create Account</div>
      </div>
    </div>
  );
};

export default Form;
