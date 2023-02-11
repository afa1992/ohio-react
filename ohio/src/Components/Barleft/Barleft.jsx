import React from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";
import styled from "../Barleft/Barleft.module.scss";
const Barleft = () => {
  return (
    <div className={styled.left}>
      <div className={styled.switcher}>
        <div className={styled.dark_mood}>
          <span>
            Light <BsSun />
          </span>

          <span>
            Dark <BsMoon />
          </span>

          <span>ScrollToTop</span>
        </div>
      </div>
      <div className={styled.totop}>
        <ScrollToTop
          style={{ position: "fixed", bottom: "330px", left: "70px" }}
        />
      </div>
    </div>
  );
};

export default Barleft;
