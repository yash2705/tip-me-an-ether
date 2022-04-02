import React from "react";

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null;
  }
  return <div className={styles.wrapper}>{error}</div>;
};

const styles = {
  wrapper: `bg-red-200 border border-red-400 text-red-700 px-1 py-2 rounded fixed text-center bottom-6 left-1/4 w-1/2 md:w-1/3 md:left-1/3 font-bold`,
};

export default ErrorMessage;
