import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-4/5 xl:w-7/12 overflow-y-scroll h-[630px] scrollbar-hide pb-16 md:pb-0">
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
