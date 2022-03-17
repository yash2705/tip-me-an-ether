import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    wrapper: `text-white w-11/12 mx-auto my-2 rounded-lg shadow-lg p-4 text-xl hover:cursor-pointer lg:text-2xl`,
    question: `font-bold flex justify-between items-center`,
  };

  return (
    <div className={styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.question}>
        {question}
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>
      <div
        className={`text-lg text-slate-300 ${
          !isOpen ? "max-h-0 overflow-hidden" : "h-auto"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordian;
