import React from "react";

const Card = ({ image, title, description }) => {
  const styles = {
    wrapper: ` space-y-2 p-4 hover:scale-105 transition duration-500 ease-in-out bg-gradient-to-r from-violet-900 md:from-transparent via-indigo-700 to-cyan-600  md:to-transparent rounded-2xl shadow-lg h-full `,
    image: `w-12`,
    title: `text-2xl font-medium text-white`,
    description: `text-white`,
  };

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

export default Card;
