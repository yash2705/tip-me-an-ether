import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3Transfer } from "react-moralis";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const PaymentCard = ({ username, walletAddress }) => {
  const [value, setValue] = useState("0.01");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, isAuthenticated, Moralis } = useMoralis();
  const navigate = useNavigate();

  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "native",
    amount: Moralis.Units.ETH(0.5),
    receiver: walletAddress,
  });

  useEffect(() => {
    if (errorMessage !== null) {
      setTimeout(() => {
        setErrorMessage(null);
      }, 4000);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (walletAddress === user.get("ethAddress")) {
      navigate("/dashboard");
    }
  }, [navigate, user, walletAddress]);

  const pay = async () => {
    if (!isAuthenticated)
      setErrorMessage(
        "Log in with your Metamask wallet before you make transactions."
      );
    else if (
      isAuthenticated &&
      user &&
      user.get("ethAddress") === walletAddress
    ) {
      setErrorMessage("Cannot send Eth to yourself.");
    } else if (
      isAuthenticated &&
      user &&
      user.get("ethAddress") !== walletAddress
    ) {
      fetch();
    }
  };

  return (
    <div className="space-y-4 w-96 mt-8">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri1mFlkbh2IzjRtCVeybZSOKdxd5_43kapg&usqp=CAU"
          alt="Avatar"
          className="w-24 h-24 rounded-full"
        />
        <div className="font-bold text-xl">{username}</div>
        <div className="text-md">157 supporters</div>
      </div>
      <div className="border border-slate-300 rounded-lg space-y-2 p-4">
        <div className="text-xl font-bold text-center">
          Tip <span className="text-slate-500">{username}</span> An Ether
        </div>
        <div className="px-2 py-6 rounded-lg text-center space-y-4 mx-auto">
          <div className="p-2 bg-violet-100 rounded-lg border border-violet-300">
            <input
              value={value}
              type="range"
              className="w-full hover:cursor-pointer"
              min="0.01"
              max="1"
              step="0.01"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <div className="flex justify-center items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
                alt="Ether"
                className="h-6 w-6"
              />
              <div>
                x <span className="font-bold text-lg">{value}</span>
              </div>
            </div>
          </div>
          <div>
            <textarea
              className="w-full h-[120px] p-2 rounded-lg bg-slate-200 focus:border-slate-400 border-slate-200 border text-sm resize-none focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say something nice...(optional)"
            />
          </div>
          <div
            className="flex justify-center items-center p-2 bg-black text-white rounded-full text-lg cursor-pointer hover:text-sky-500"
            onClick={() => pay()}
          >
            <div>
              Support <span className="font-bold">{value} </span> x
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
              alt="Ether"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      {error && <ErrorMessage error={errorMessage} />}
    </div>
  );
};

export default PaymentCard;
