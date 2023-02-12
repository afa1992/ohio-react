import React from "react";
import styled from "../Cards/Cards.module.scss";
import AOS from "aos";
import { useEffect } from "react";
import Demosites from "../../../MockData/CardMock";

const Cards = () => {
  useEffect(() => {
    AOS.init(4000);
  }, []);

  return (
    <section className={styled.cards}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center ">
          <div className="col-md-6 ">
            <div className={styled.inner}>
              <span className={styled.badge_outlined}>Easy Installation</span>
              <h1 className={styled.title}>
                {" "}
                <span>Carefully crafted</span> <br />
                demo sites.
              </h1>
              <p className={styled.details}>
                Choose and mix up demos and components with no coding skills.
                <br />
                <b>Only real business demo websites.</b>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {Demosites &&
            Demosites.map((element) => {
              return (
                <div
                  className="col-md-4 "
                  data-aos="fade-up"
                  key={`product_id${element.id}`}
                >
                  <div className={styled.card}>
                    <img
                      src={element._Img}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body text-center p-3">
                      <h6>{element.title}</h6>
                      <p>{element.category}</p>
                    </div>
                    <div className={styled.hover}>
                      <button>Elementor</button>
                      <button>WP Bakery</button>
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

export default Cards;
