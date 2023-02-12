import React from "react";
import styled from "../Navbar/MobNav.module.scss";
import Sidebar from "./Sidebar";

const MobNav = () => {
  return (
    <div className={styled.mob_navbar}>
      <div className="side" id="page-wrap">
        <div id="outer-container">
          <Sidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </div>
      </div>

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
