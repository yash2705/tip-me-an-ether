import React from "react";
import Card from "./Card";
const Features = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.largeFont}>All Features</div>
      <div className={styles.cardContainer}>
        {features.map((feature) => {
          return (
            <Card
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  largeFont: `text-3xl text-black font-medium text-center mt-6`,
  wrapper: `items-center space-y-4`,
  cardContainer: `max-w-6xl p-4 lg:mx-auto lg:my-auto md:grid md:grid-cols-3 space-y-4 ml-8 mr-8 md:gap-4 lg:gap-8 items-center min-h-max md:space-y-0`,
};

const features = [
  {
    id: 1,
    title: "Get Paid Directly",
    description: "Instant donations directly to your Metamask wallet",
    image: "https://ko-fi.com/img/feature_mini_icons/donate_icon.png",
  },
  {
    id: 2,
    title: "0% Commissions",
    description: "0% commisions on all donations you recieve",
    image:
      "https://wbstatic.webullfintech.com/v1/webull-hk-g/assets/37e63b71108d262391143e31073bc75b.png",
  },
  {
    id: 3,
    title: "Messages",
    description: "Encouragement from supporters",
    image: "https://ko-fi.com/img/feature_mini_icons/supportmessage_icon.png",
  },
  {
    id: 4,
    title: "Posts",
    description: "Share your work and progress",
    image: "https://ko-fi.com/img/feature_mini_icons/gallery_icon.png",
  },
  {
    id: 5,
    title: "Safe and Secure",
    description: "No need to give us your bank accounts/ credit card details",
    image:
      "https://ourbigitalianadventure.com/wp-content/uploads/2016/11/bank-non.png",
  },
  {
    id: 6,
    title: "NFT Marketplace",
    description: "Sell exclusive NFts to your supporters (Coming Soon)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/640px-NFT_Icon.png",
  },
];

export default Features;
