import React from "react";
import { useMoralis } from "react-moralis";
const Create = () => {
  const { isAuthenticated } = useMoralis();
  return <div>Create</div>;
};

export default Create;
