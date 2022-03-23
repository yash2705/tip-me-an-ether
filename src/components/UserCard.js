import React from "react";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <Link to="/yash2705">
      <div className="bg-white rounded-xl mr-4">
        <div className="flex justify-center overflow-hidden w-48 h-48 rounded-t-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
            alt="Avatar"
            className="w-full h-full transition-all duration-200 ease-in-out transform bg-center bg-cover hover:scale-110 hover:cursor-pointer"
          />
        </div>
        <div className="font-semibold text-lg p-2">yash2705</div>
        <div className="px-2 pb-2">157 Supporters</div>
      </div>
    </Link>
  );
};

export default UserCard;
