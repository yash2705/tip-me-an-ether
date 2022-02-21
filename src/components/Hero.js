import React, { useState } from "react";

const Hero = () => {
  const [username, setUsername] = useState("");

  const styles = {
    wrapper: `flex flex-col items-center justify-center mt-10 items-center text-center space-y-6`,
    container: `flex items-center justify-between rounded-full text-white drop-shadow-lg text-xl md:bg-violet-600 w-4/5 sm:w-2/3 lg:w-2/5 hover:scale-105 transition duration-500 ease-in-out bg-violet-700`,
    largeFont: `text-6xl text-white w-4/5 md:w-2/5 font-bold`,
    mediumFont: `text-2xl text-white w-4/5 lg:w-2/5`,
    input: `rounded-full focus:border-none focus:outline-none p-2 bg-transparent w-3/5`,
    leftContainer: `flex items-center ml-6 my-2 w-3/4 `,
    button: `mr-2 cursor-pointer rounded-full p-2 my-2 bg-violet-800 hover:bg-violet-900`,
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
