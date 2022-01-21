import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchLogo from "../assets/header/theme-switch.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={punkLogo} alt="punkLogo" className="punkLogo" />
      </div>
      <div className="search-container">
        <div className="search-icon-container">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Collection.. item... user.."
        />
      </div>
      <div className="header-items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>
      <div className="header-actions">
        <div className="theme-switch-container">
          <img src={themeSwitchLogo} alt="" className="theme-switch-logo" />
        </div>
      </div>
      <div className="login-button">GET IN</div>
    </div>
  );
};

export default Header;
