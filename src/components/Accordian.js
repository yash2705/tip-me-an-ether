import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    wrapper: `bg-white text-black w-11/12 mx-auto mt-3 md:mt-4 rounded-lg shadow-sm p-4 text-lg md:text-xl hover:cursor-pointer`,
    question: `font-bold flex justify-between items-center`,
  };

  return (
    <div className={styles.wrapper} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.question}>
        {question}
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </div>
      <div
        className={`text-lg text-slate-600 ${
          !isOpen ? "max-h-0 overflow-hidden" : "h-auto"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordian;
