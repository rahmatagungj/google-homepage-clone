import React from "react";
import googleLogo from "../images/googleLogo.png";
import "../styles/Body.scss";
import QuickButton from "./commons/QuickButton";
import SearchBar from "./commons/SearchBar";

const Body = () => {
  return (
    <div className="container">
      <img src={googleLogo} alt="Google" />
      <SearchBar />
      <div className="newsButton">
        <QuickButton href="#" text="Google Search" />
        <QuickButton href="#" text="Saya sedang beruntung" />
      </div>
    </div>
  );
};

export default Body;
