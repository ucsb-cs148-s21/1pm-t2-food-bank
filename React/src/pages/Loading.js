import React from "react";
import loading from "../assets/loading.svg";
import Layout from "./Layout"

const Loading = () => {
  return (
    <Layout>
      <div className="spinner">
        <img src={loading} alt="Loading" />
        <p>Loading...</p>
      </div>
    </Layout>
  );
};

export default Loading;
