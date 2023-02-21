import React from "react";
import Demo from "../../../../Assets/Demo17__Slide1__Mobile.jpeg";
import Phone from "../../../../Assets/iPhone.png";
import Laptop from "../../../../Assets/Laptop.png";
import styled from "../Banner/Banner.module.scss";

const Banner = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className={styled.banner}>
              <div className={styled.banner_small}>
                <img src={Demo} alt="" className={styled.demo_img} />
                <img src={Phone} alt="" className={styled.phone_img} />
              </div>
              <div className={styled.banner_big}>
                <img src={Laptop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
