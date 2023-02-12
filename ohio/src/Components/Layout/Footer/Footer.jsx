import React from "react";
import Foot from "../../MockData/FooterMock";
import styled from "../Footer/Footer.module.scss";

const Footer = () => {
  return (
    <section className={styled.footer}>
      <div className="container">
        <div className="row ">
          {Foot &&
            Foot.map((element) => {
              return (
                <div
                  className="col-md-3 col-sm-12 p-3"
                  key={`product_id${element.id}`}
                >
                  <h4>
                    {" "}
                    {element.h4} <br /> {element.hh}{" "}
                  </h4>
                  <p>
                    {" "}
                    {element.p1} <b> {element.b}</b> {element.p2}{" "}
                  </p>
                </div>
              );
            })}
        </div>
        <div className={`row &{styled.copyright}`}>
          <div className="col-md-6 col-sm-12">
            <p> © 2016-2023 Colabrio. All rights reserved | </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>Security| Privacy & Cookie Policy| Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
