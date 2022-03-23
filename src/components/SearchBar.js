import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const search = () => {
    navigate(`/${username}`);
  };

  const styles = {
    wrapper: `flex lg:w-5/6 w-11/12 mx-4 rounded-full border-2 border-black px-3 py-2 items-center`,
    icon: `w-6 h-6`,
    input: `px-2 flex-1 focus:outline-none rounded-full bg-transparent  text-black font-medium text-lg`,
    button: `rounded-full px-4 py-2 font-bold bg-slate-300 hover:cursor-pointer hover:bg-slate-400`,
  };
  return (
    <div className={styles.wrapper}>
      <AiOutlineSearch className={styles.icon} />
      <input
        className={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search creators on Tip Me An Ether"
      />
      <div className={styles.button} onClick={search}>
        Search
      </div>
    </div>
  );
};

export default SearchBar;
