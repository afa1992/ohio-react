import React from "react";
import { BsArrowUpRight, BsAwardFill } from "react-icons/bs";
import styled from "../Intro/Intro.module.scss";

const Intro = () => {
  return (
    <section className={styled.intro}>
      <div className={styled.intro_dark}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>
                <span>With best in class</span> features and design templates.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className={styled.inverse_red}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/FigmaShape.svg"
                  alt=""
                />
                <h4>
                  {" "}
                  Theme’s Figma design <br />
                  source files go with your purchase.
                </h4>
                <button className={styled.sml_outlined}>
                  {" "}
                  <BsArrowUpRight /> Release Notes{" "}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styled.inverse_black}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/FigmaShape.svg"
                  alt=""
                />
                <h4>
                  Standard + custom WPBakery <br /> shortcodes and Elementor
                  widgets.
                </h4>
                <button className={styled.sml_outlined}>
                  {" "}
                  <BsArrowUpRight /> Get File{" "}
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styled.review}>
                <button>Design Quality</button>
                <p>
                  “One of the best themes I've ever used, didn't have to reach
                  support yet and I've been working 3 months with it.
                  Congratulations to Colabrio for their awesome work.”
                </p>
                <h6>by JoaquinLaser</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styled.intro_light_dark}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={styled.review}>
                <button className={styled.sml_outlined}>
                  {" "}
                  <BsArrowUpRight /> Package{" "}
                </button>
                <h3>
                  <span>Bundled with</span>
                  popular premium plugins.
                </h3>
                <p>
                  Ohio single license goes with WPBakery Page Builder, ACF Pro
                  and Slider Revolution plugins that helps you to
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styled.plugin}>
                <div className={styled.bundled}>
                  <div className={styled.icon}>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/BundledIcon.svg"
                      alt=""
                    />
                    <BsAwardFill />
                  </div>
                  <h5>
                    WPBakery <br />
                    Page Builder
                  </h5>
                  <div className={styled.label}>
                    <span className="free">$65</span>
                  </div>
                </div>
                <div className={styled.bundled}>
                  <div className={styled.icon}>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/BundledIcon.svg"
                      alt=""
                    />
                    <BsAwardFill />
                  </div>
                  <h5>
                    WPBakery <br />
                    Page Builder
                  </h5>
                  <div className={styled.label}>
                    <span className="free">$65</span>
                  </div>
                </div>
                <div className={styled.bundled}>
                  <div className={styled.icon}>
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/BundledIcon.svg"
                      alt=""
                    />
                    <BsAwardFill />
                  </div>
                  <h5>
                    WPBakery <br />
                    Page Builder
                  </h5>
                  <div className={styled.label}>
                    <span className="free">$65</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styled.inverse}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio/landing/assets/img/new/TranslateIcon.svg"
                  alt=""
                />
                <h4>
                  {" "}
                  Standard + custom WPBakery <br />
                  shortcodes and Elementor widgets.
                </h4>
                <button className={styled.sml_outlined}>
                  {" "}
                  <BsArrowUpRight /> Release Notes{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
