import React from "react";
import user from "../images/user.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Gmail</li>
          <li>Images</li>
        </ul>
        <img src={user} alt="Rahmat Agung Julians" />
      </nav>
    </header>
  );
};

export default Header;
