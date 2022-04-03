import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../components/Error404";
import HomeHeader from "../components/HomeHeader";
import Spinner from "../components/Spinner";
import PaymentCard from "../components/PaymentCard";
import { db } from "../firebaseConfig";
import Post from "../components/Post";
import ExploreCreatorCard from "../components/ExploreCreatorCard";
import CreatorCard from "../components/CreatorCard";
import TipCard from "../components/TipCard";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import BottomNavigationBar from "../components/BottomNavigationBar";

const CreatorProfile = () => {
  const { username } = useParams();
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [tab, setTab] = useState("SUPPORTERS");

  useEffect(() => {
    const fetchUser = async () => {
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      setLoading(false);
      if (querySnapshot.size === 1) {
        setExists(true);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
        console.log(user);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div
      className={`bg-slate-100 overflow-x-hidden flex flex-col items-center justify-center max-w-screen pt-4 min-h-screen`}
    >
      <HomeHeader />
      {loading && <Spinner />}
      {!loading && !exists && <Error404 />}
      {!loading && exists && (
        <div className="w-screen flex flex-col items-center lg:items-start lg:flex lg:flex-row-reverse lg:pr-16 lg:pl-20 pt-12 min-h-screen lg:pt-16 xl:px-40">
          <PaymentCard
            walletAddress={user.walletAddress}
            username={user.username}
          />
          <div className="lg:flex-1 flex flex-col w-full">
            <div className="flex items-center justify-center space-x-4 text-xl font-medium py-4">
              <span
                className={`hover:cursor-pointer ${
                  tab === "SUPPORTERS"
                    ? "text-violet-600 underline underline-offset-4"
                    : "text-slate-600 hover:text-black"
                }`}
                onClick={() => {
                  if (tab !== "SUPPORTERS") setTab("SUPPORTERS");
                }}
              >
                SUPPORTERS
              </span>
              <span
                className={`hover:cursor-pointer ${
                  tab === "POSTS"
                    ? "text-violet-600 underline underline-offset-4"
                    : "text-slate-600 hover:text-black"
                }`}
                onClick={() => {
                  if (tab !== "POSTS") setTab("POSTS");
                }}
              >
                POSTS
              </span>
            </div>
            <div className="w-full px-8 md:pb-8 pb-20">
              {tab === "POSTS" && (
                <>
                  <Post />
                  <Post />
                  <Post />
                </>
              )}
              {tab === "SUPPORTERS" && (
                <>
                  {tips.map((tip) => {
                    return (
                      <TipCard
                        key={tip.id}
                        value={tip.value}
                        username={tip.username}
                        message={tip.message}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <BottomNavigationBar />
    </div>
  );
};

const tips = [
  {
    id: 1,
    username: "someone",
    value: 0.2,
    message: "good work",
  },
  {
    id: 2,
    username: "naruto",
    value: 0.02,
    message: "dattebayo!",
  },
  {
    id: 3,
    username: "luffy",
    value: 0.05,
  },
  {
    id: 4,
    username: "pain",
    value: 0.1,
    message: "shinra tensei",
  },
];

export default CreatorProfile;
