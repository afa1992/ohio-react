import React from "react";
import { TiTick } from "react-icons/ti";
import styled from "../Hero/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styled.hero_page}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={styled.inner}>
              <span className={styled.badge_outlined}>
                WPBakery & Elementor
              </span>
              <h1 className={styled.title}>
                {" "}
                <span>Build a creative</span> <br />
                showcase|
                <br />
                website.
              </h1>
              <p className={styled.details}>
                <b>Quick and easy getting started</b>
                <br />
                with carefully crafted ready-to-go templates.
              </p>
              <ul>
                <li>
                  {" "}
                  <TiTick /> Easy to use
                </li>
                <li>
                  <TiTick /> No coding
                </li>
                <li>
                  <TiTick />
                  Life-time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
