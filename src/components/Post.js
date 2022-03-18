import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";
const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

  const styles = {
    wrapper: `text-black w-11/12 mx-auto rounded-md shadow-md bg-white md:my-4 my-2 pb-4`,
    topContainer: `hover:cursor-pointer flex space-x-3 items-center pl-4 pt-2`,
    avatar: `h-12 w-12 rounded-full`,
    username: `font-semibold text-md`,
    postContainer: `w-full h-72 object-cover mt-2 mb-2 sm:h-80 md:h-96`,
    middleContainer: `px-6 space-y-2`,
    date: `text-slate-700`,
    caption: `font-bold text-lg`,
    bottomContainer: `flex space-x-6`,
    option: `flex items-center space-x-2`,
    like: `hover:cursor-pointer bg-slate-100 p-2 rounded-full text-xl text-slate-600 hover:bg-red-100 hover:text-red-600`,
    liked: `hover:cursor-pointer p-2 rounded-full text-xl bg-red-100 text-red-600`,
    comment: `hover:cursor-pointer bg-slate-100 p-2 rounded-full text-xl text-slate-600 hover:bg-green-100 hover:text-green-600`,
    likeInfo: `text-md font-semibold text-slate-600`,
    commentInfo: `text-md font-semibold text-slate-600`,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
            alt="Avatar"
            className={styles.avatar}
          />
        </div>
        <Link to="/USERNAME">
          <div className={styles.username}>USERNAME</div>
        </Link>
      </div>
      <img
        src="https://canny.io/images/269e4941c9e4c109079258db40014328.gif"
        alt="Post"
        className={styles.postContainer}
      />
      <div className={styles.middleContainer}>
        <div className={styles.date}>DATE</div>
        <div className={styles.caption}>CAPTION</div>
        <div className={styles.bottomContainer}>
          <div className={styles.option} onClick={() => setIsLiked(!isLiked)}>
            <div className={isLiked ? styles.liked : styles.like}>
              {!isLiked ? <AiOutlineHeart /> : <AiFillHeart />}
            </div>
            <span className={styles.likeInfo}>LIKES</span>
          </div>
          <div className={styles.option}>
            <div className={styles.comment}>
              <AiOutlineComment />
            </div>
            <span className={styles.commentInfo}>COMMENTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
