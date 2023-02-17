import React from "react";
import styled from "../ContactFoot/ConFoot.module.scss";

const ContactFoot = () => {
  return (
    <section className={styled.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={styled.logo}>
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                alt=""
              />
              <div className={styled.widget}>
                <span>
                  <strong>Fb.</strong>{" "}
                </span>{" "}
                /
                <span>
                  <strong>Ig.</strong>{" "}
                </span>{" "}
                /
                <span>
                  <strong>Tw.</strong>{" "}
                </span>{" "}
                /
                <span>
                  <strong>Be.</strong>{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul>
              <li>
                {" "}
                <h3>Rotterdam</h3>
              </li>
              <li>
                <div className={styled.text}>
                  <b>Ohio Digital Media LTD.</b>
                  <p>Graaf Florisstraat 22A,</p>
                  <p>3021 CH Rotterdam</p>
                  <p>Netherlands</p>
                </div>
              </li>
              <li>
                <h3>Barcelona</h3>
                <div className={styled.text}>
                  <b>Ohio Digital Media LTD.</b>

                  <p>365 Gran Via de Corts</p>

                  <p>Catalanes, BA 08015</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <ul>
              <li>
                {" "}
                <h3>Work inquiries</h3>
              </li>
              <li>
                <div className={styled.text}>
                  <p>Graaf Florisstraat 22A,</p>

                  <b>hello@clbthemes.com</b>
                </div>
              </li>
              <li>
                <h3>Career</h3>
                <div className={styled.text}>
                  <p>Graaf Florisstraat 22A,</p>

                  <b>See open positions</b>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className={styled.check}>
              <h3>Sign up for the newsletter</h3>
              <label htmlFor="">Sign Up</label>
              <input type="email" placeholder="Email Address" />

              <p>
                <input type="checkbox" name="" className={styled.checkbox} />
                I’m okay with getting emails and having that activity tracked to
                improve my experience.
              </p>
            </div>
          </div>
        </div>
        <div className={styled.end}>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p>
                © 2016-2023 Colabrio. All rights reserved | <b>Purchase</b>{" "}
              </p>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 text-end">
              <p>Security| Privacy & Cookie Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFoot;
