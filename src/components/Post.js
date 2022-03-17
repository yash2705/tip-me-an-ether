import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="text-black w-11/12 mx-auto rounded-md shadow-md pb-4 bg-white">
      <div className="flex space-x-3 items-center pl-4 pt-2">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
            alt="Avatar"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="font-semibold text-md">USERNAME</div>
      </div>
      <img
        src="https://canny.io/images/269e4941c9e4c109079258db40014328.gif"
        alt="Post"
        className="w-full h-72 object-cover mt-2 mb-2 sm:h-80 md:h-96"
      />
      <div className="px-6 space-y-2">
        <div className="text-slate-700">DATE</div>
        <div className="font-bold text-lg">CAPTION</div>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <div className="hover:cursor-pointer bg-slate-100 p-2 rounded-full text-xl text-slate-600 hover:bg-red-100 hover:text-red-600">
              {!isLiked ? <AiOutlineHeart /> : <AiFillHeart />}
            </div>
            <span className="text-md font-semibold text-slate-600">LIKES</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="hover:cursor-pointer bg-slate-100 p-2 rounded-full text-xl text-slate-600 hover:bg-green-100 hover:text-green-600">
              <AiOutlineComment />
            </div>
            <span className="text-md font-semibold text-slate-600">
              COMMENTS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
