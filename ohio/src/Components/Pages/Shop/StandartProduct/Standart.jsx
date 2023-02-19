import React from "react";
import { BsChevronRight } from "react-icons/bs";
import styled from "../StandartProduct/Standart.module.scss";
import ReactImageMagnify from "react-image-magnify";
import Img018 from "../../../../Assets/kfnQjzZB-ProductImage__018.jpg";
import Img017 from "../../../../Assets/vvT68sbJ-ProductImage__017.jpg";
import Img019 from "../../../../Assets/nHTDq8be-ProductImage__019.jpg";
import Img020 from "../../../../Assets/ProductImage__020.jpg";
const Standart = () => {
  return (
    <section className={styled.standart}>
      <div className="container ">
        <div className="row ">
          <div className="col-md-2 my-4">
            <div className={styled.breadcrumb}>
              <span>
                {" "}
                <b>Shop</b>{" "}
              </span>
              <span>
                <BsChevronRight />
              </span>
              <span>
                {" "}
                <b>Chairs </b>{" "}
              </span>
              <span>
                <BsChevronRight />
              </span>
              <span>Modern Upholstery Stool</span>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6 mb-4 col-sm-12">
                  <div className={styled.chair}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: Img017,
                        },
                        largeImage: {
                          src: Img017,
                          width: 753,
                          height: 753,
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4 col-sm-12">
                  <div className={styled.chair}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: Img018,
                        },
                        largeImage: {
                          src: Img018,
                          width: 753,
                          height: 753,
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4 col-sm-12">
                  <div className={styled.chair}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: Img020,
                        },
                        largeImage: {
                          src: Img020,
                          width: 753,
                          height: 753,
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-4 col-sm-12">
                  <div className={styled.chair}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: Img019,
                        },
                        largeImage: {
                          src: Img019,
                          width: 753,
                          height: 753,
                        },
                        isHintEnabled: true,
                        enlargedImagePosition: "over",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styled.holder}>
                <span>In stock</span>
                <h1>Modern Upholstery Stool</h1>
                <p> $89.00</p>
                <div className={styled.meta}>
                  <b>SKU: </b>29045-SB-2
                  <b>Categories: </b> Chairs,everyday Essentials
                  <b>Tags:</b>Creative,Shop,WordPress
                </div>
                <div className={styled.text}>
                  The current product may have{" "}
                  <strong>a manufacturer’s warranty</strong>. Visit the website
                  or contact us for full warranty details.
                </div>
                <div className={styled.text}>
                  Free delivery available;
                  <br />
                  Use promo-code and save up to 25%;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standart;
