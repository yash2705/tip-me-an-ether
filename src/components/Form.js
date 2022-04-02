import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";
import validator from "validator";
import { db } from "../firebaseConfig";
import Spinner from "./Spinner";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();
  const { user, isAuthenticated } = useMoralis();

  const signup = async () => {
    setLoading(true);
    await isValid();
    await register();
    setLoading(false);
  };

  const isValid = async () => {
    setUsernameError(() =>
      username.length >= 4 ? "" : "Username must be atleast 4 characters long."
    );
    setEmailError(() =>
      !validator.isEmail(email) ? "Enter a valid email address." : ""
    );
  };

  const register = async () => {
    if (
      emailError === "" &&
      usernameError === "" &&
      username !== "" &&
      email !== "" &&
      checked &&
      isAuthenticated
    ) {
      const walletAddress = user.get("ethAddress").toString();
      let q = query(
        collection(db, "users"),
        where("emailAddress", "==", email)
      );

      let querySnapshot = await getDocs(q);
      if (querySnapshot.size !== 0)
        setEmailError("Email address already in use.");
      console.log(querySnapshot.size);
      q = query(collection(db, "users"), where("username", "==", username));
      querySnapshot = await getDocs(q);
      if (querySnapshot.size !== 0)
        setUsernameError("Username already in use.");
      console.log(querySnapshot.size);

      if (usernameError !== "" || emailError !== "") return;

      const usersCollectionRef = collection(db, "users");
      const payload = {
        username,
        emailAddress: email,
        walletAddress,
      };
      await addDoc(usersCollectionRef, payload);
      navigate("/home");
    }
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
              usernameError !== "" ? styles.errorBorder : styles.border
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
              emailError !== "" ? styles.errorBorder : styles.border
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
          <div className={styles.terms}>
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
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.button} onClick={signup} disabled={loading}>
            Create Account
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  wrapper: `flex justify-between w-screen px-4 py-2 z-40 items-center md:px-12 shadow-md md:shadow-none`,
  input: `text-black bg-transparent border border-2 outline-none rounded-xl p-2 w-full`,
  form: `text-xl mx-auto md:w-3/5`,
  formContainer: `flex flex-1 mx-auto items-center align-items-center md:w-4/5 max-w-screen-md`,
  button: `rounded-full p-2 mt-4 hover:cursor-pointer font-medium md:m-4 text-center bg-black text-white`,
  link: `underline underline-offset-4 hover:cursor-pointer font-medium text-md text-black decoration-slate-400 hover:decoration-black`,
  inputContainer: `text-black flex justify-items-center items-center border-slate-400 hover:border-white`,
  checkBox: `form-check-input h-4 w-4 border border-black rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer`,
  title: `font-bold text-2xl mb-6`,
  validationError: `text-sm font-medium text-red-500 h-6`,
  errorBorder: `border-red-500 hover:border-red-700`,
  terms: `text-slate-700`,
};

export default Form;
