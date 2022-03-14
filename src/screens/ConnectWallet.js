import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Footer from "../components/Footer";
import LoginHeader from "../components/LoginHeader";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const ConnectWallet = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setError();
    }, 4000);
  }, [error]);

  const connect = async () => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      if (address === "0x5816f1b0A29d23E4524f2762324e1c9831F05936") {
        return navigate("/faq");
      } else {
        return navigate("/signup");
      }
    } catch (err) {
      setError(err.message);
      return;
    }
  };

  return (
    <div className="bg-gradient-to-r from-violet-900 via-indigo-700 to-cyan-600 min-h-screen flex flex-col overflow-x-hidden md:overflow-x-visible justify-between items-center">
      <LoginHeader />
      <div
        className="text-white bg-purple-500 rounded-full p-4 text-center font-bold text-xl m-auto hover:cursor-pointer hover:bg-purple-700"
        onClick={connect}
      >
        Connect Wallet
      </div>
      <ErrorMessage error={error} />
      <Footer />
    </div>
  );
};

export default ConnectWallet;
