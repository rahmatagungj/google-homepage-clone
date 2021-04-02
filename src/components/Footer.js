import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="country">
        <h3>Indonesia</h3>
      </div>
      <hr />
      <div className="foot">
        <div className="credit">
          <ul>
            <li>Tentang</li>
            <li>Iklan</li>
            <li>Bisnis</li>
            <li>Cara pencarian bekerja</li>
          </ul>
        </div>
        <div className="docs">
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Pengaturan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
