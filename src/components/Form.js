import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import validator from "validator";

const Form = () => {
  const styles = {
    wrapper: `flex justify-between w-screen text-white px-4 py-2 z-40 items-center md:px-12 shadow-md md:shadow-none`,
    rightSection: `flex items-center`,
    logo: `h-10 p-1 ml-2 md:h-15 cursor-pointer`,
    login: `rounded-full p-2 mt-2 mb-2 mr-2 border hover:cursor-pointer font-medium md:m-3 hover:scale-110 transition duration-200 ease-out`,
    text: `hidden md:inline`,
    input: `bg-transparent border border-2 outline-none rounded-xl p-2 w-full`,
    form: `text-white text-xl mx-auto md:w-3/5`,
    formContainer: `flex flex-1 mx-auto items-center align-items-center md:w-4/5 max-w-screen-md`,
    button: `rounded-full p-2 mt-4 hover:bg-purple-600 hover:cursor-pointer font-medium md:m-4 text-center bg-violet-200 text-violet-700 hover:bg-violet-600 hover:text-violet-300`,
    link: `underline underline-offset-4 hover:cursor-pointer font-medium text-md text-white decoration-slate-300 hover:decoration-white`,
    inputContainer: `text-slate-300 flex justify-items-center items-center border-slate-400 hover:border-white`,
    checkBox: `form-check-input h-4 w-4 border border-purple-600 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer chcked:text-white`,
    title: `font-bold text-2xl mb-6`,
    validationError: `text-sm font-medium text-red-500 h-6`,
    errorBorder: `border-red-500 hover:border-red-700`,
    border: `border-slate-400 hover:border-white`,
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState();

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setError();
    }, 4000);
  }, [error]);

  const isValid = () => {
    console.log(username, email);
    username.trim.length < 4
      ? setUsernameError("Username must be atleast 4 characters long.")
      : setUsernameError("");

    !validator.isEmail(email)
      ? setEmailError("Enter a valid email address.")
      : setEmailError("");
  };

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
            className={`${styles.input} ${
              usernameError ? styles.errorBorder : styles.border
            }`}
            placeholder="Display Name"
          />
          <div className={styles.validationError}>{usernameError}</div>
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={`${styles.input} ${
              emailError ? styles.errorBorder : styles.border
            }`}
            placeholder="Email Address"
          />
          <div className={styles.validationError}>{emailError}</div>
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
        <div
          className={`${styles.validationError} ${
            checked ? "opacity-0" : "opacity-1"
          }`}
        >
          Accept the terms and privacy policy
        </div>
        <div className={styles.button} onClick={isValid}>
          Create Account
        </div>
      </div>
      <ErrorMessage error={error} />
    </div>
  );
};

export default Form;
