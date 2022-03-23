import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Error404 from "../components/Error404";
import HomeHeader from "../components/HomeHeader";
import Spinner from "../components/Spinner";
import PaymentCard from "../components/PaymentCard";
import { db } from "../firebaseConfig";

const CreatorProfile = () => {
  const { username } = useParams();
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

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
      className={`min-h-screen bg-slate-100 overflow-x-hidden md:overflow-x-visible flex flex-col overflow-y-hidden items-center justify-center w-screen`}
    >
      <HomeHeader />
      {loading && <Spinner />}
      {!loading && !exists && <Error404 />}
      {!loading && exists && (
        <div className="w-full h-full flex flex-col items-center">
          <PaymentCard
            walletAddress={user.walletAddress}
            username={user.username}
          />
        </div>
      )}
    </div>
  );
};

export default CreatorProfile;
