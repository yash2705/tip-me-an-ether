import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { MoralisProvider } from "react-moralis";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId="vXjPhErsUkzgvPYUNHui52JQetBUcmPUtwb5TIKs"
      serverUrl="https://9jls0uwwe0on.usemoralis.com:2053/server"
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
