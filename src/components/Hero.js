import React, { useState } from "react";

const Hero = () => {
  const [username, setUsername] = useState("");
  const styles = {
    wrapper: `flex flex-col items-center justify-center mt-10 items-center text-center space-y-6`,
    container: `flex items-center justify-between rounded-full text-white hover:drop-shadow-lg drop-shadow-sm text-xl bg-indigo-400`,
    largeFont: `text-6xl text-white w-4/5 md:w-2/5 font-bold`,
    mediumFont: `text-2xl text-pink-100 w-4/5 lg:w-2/5`,
    input: `rounded-full focus:border-none focus:outline-none p-2 bg-transparent`,
    leftContainer: `flex items-center ml-6 my-2`,
    button: `mr-4 cursor-pointer rounded-full p-2 my-2 bg-violet-800 hover:bg-violet-900`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.largeFont}>
        A supporter is worth a thousand followers.
      </div>
      <div className={styles.mediumFont}>
        Make an Income Doing What You Love! The free, friendly way to accept
        donations directly from fans.
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div>tipmeanether/</div>
          <input
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.button}>Claim</div>
      </div>
    </div>
  );
};

export default Hero;
