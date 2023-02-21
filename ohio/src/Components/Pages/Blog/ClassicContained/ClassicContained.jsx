import React from "react";
import "../ClassicContained/ClassicContained.scss";
import { BsChevronRight } from "react-icons/bs";
import { Products } from "../../../MockData/CardMock";

const ClassicContained = () => {
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-lg-12   text-center">
            <div className="animated_holder">
              <h1>Classic Contained</h1>
              <div className="meta_holder">
                <span>WPBakery</span>
                <span>Elementor</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-2 my-4">
            <div className="breadcrumb">
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
        </div>
        <div className="row mb-5 cards">
          {Products &&
            Products.map((element) => {
              return (
                <div className="col-lg-4 col-md-12 col-sm-12 g-4">
                  <div className="card">
                    <img src={element._Img} alt="" />

                    <div className="card_details">
                      <div className="overlay">
                        <div className="meta_items">
                          <img
                            src="https://secure.gravatar.com/avatar/4058fe7404c4f9d88d5d2d6db42320f8?s=50&d=mm&r=g"
                            alt=""
                          />
                        </div>
                        <div className="meta_items">
                          <span>
                            {" "}
                            Posted by
                            <br />
                            <b>Colabrio</b>{" "}
                          </span>
                        </div>
                      </div>
                      <div className="headline">
                        <span className="date"> August 5, 2020 </span>

                        <span className="time">9 min read </span>
                      </div>
                      <h4>{element.title} </h4>
                      <div className="category_holder">
                        <button>Digital</button>
                        <button>Marketing</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ClassicContained;
