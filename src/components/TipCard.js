import React from "react";

const TipCard = ({ username, value, message }) => {
  return (
    <div className="w-full mx-auto border border-slate-300 p-5 my-2 rounded-xl">
      <div className="flex items-center space-x-2">
        <img
          src="https://icon-library.com/images/eth-alt-512_19124.png"
          alt=""
          className="w-12 h-12"
        />

        <span className="text-lg">
          <span className=" font-medium">{username}</span> tipped {value} Ether.
        </span>
      </div>
      {message && (
        <div className="p-3 bg-violet-100 border border-violet-300 rounded-b-xl rounded-tr-xl mt-2 ml-6">
          {message}
        </div>
      )}
    </div>
  );
};

export default TipCard;
