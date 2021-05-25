import React from "react";
import loading from "../assets/loading.svg";

const CheckingSignedIn = () => {
  return (
      <div className="spinner">
        <img src={loading} alt="Loading" />
        <p>Checking if you're signed in...</p>
      </div>
  );
};

export default CheckingSignedIn;