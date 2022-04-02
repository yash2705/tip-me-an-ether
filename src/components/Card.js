import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

const styles = {
  wrapper: ` space-y-2 p-4 sm:hover:scale-105 transition duration-500 ease-in-out bg-white rounded-2xl shadow-md h-full `,
  image: `w-12`,
  title: `text-2xl font-medium text-black`,
  description: `text-black`,
};

export default Card;
