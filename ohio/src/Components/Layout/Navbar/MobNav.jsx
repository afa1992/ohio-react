import React from "react";
import styled from "../Navbar/MobNav.module.scss";
import Burger from "./Burger";

const MobNav = () => {
  return (
    <div className={styled.mob_navbar}>
      <Burger />
      <div className="logo">
        <img
          src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
          alt=""
        />
      </div>
      <button className="optional">Getting Started</button>
    </div>
  );
};

export default MobNav;
