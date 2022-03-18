import React from "react";

const CreatorCard = () => {
  const styles = {
    container: `flex space-x-3 p-2 items-center my-2 hover:bg-white rounded-xl hover:cursor-pointer hover:text-black hover:underline text-slate-500`,
    avatar: `h-10 w-10 rounded-full`,
    username: `font-semibold text-lg`,
  };

  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
          alt="Avatar"
          className={styles.avatar}
        />
      </div>
      <div className={styles.username}>username</div>
    </div>
  );
};

export default CreatorCard;
