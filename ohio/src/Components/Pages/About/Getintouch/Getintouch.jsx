import React from "react";
import { BsChevronRight } from "react-icons/bs";
import styles from "../Getintouch/GetIn.module.scss";

const Getintouch = () => {
  return (
    <section className={styles.touch}>
      <div className="container ">
        <div className="row ">
          <div className="col-md-2 ">
            <div className={styles.breadcrumb}>
              <ul>
                <li>
                  Home <BsChevronRight />
                </li>
                <li>Contact:Agency</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.bottom}>
          <div className="row">
            <div className="col-lg-2 col-sm-12">
              <div className={styles.inner_fluid}>
                <ul>
                  <li>
                    {" "}
                    <h4> Get in touch</h4>
                  </li>
                  <li>Work Inquiries</li>
                  <li>
                    {" "}
                    <strong>+1.809.120.6705</strong>
                  </li>
                  <li></li>
                  <li>Assistance hours:</li>
                  <li>Monday – Friday</li>
                  <li>6 am to 8 pm EST</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-12">
              <div className={styles.inner_fluid}>
                <ul>
                  <li>
                    {" "}
                    <h4> Get in touch</h4>
                  </li>
                  <li>Careers & Press</li>
                  <li>
                    {" "}
                    <strong>+1.809.120.4590</strong>
                  </li>
                  <li></li>
                  <li>Assistance hours:</li>
                  <li>Tuesday – Saturday</li>
                  <li>6 am to 8 pm EST</li>
                </ul>
                <br />
              </div>
            </div>
            <div className="col-lg-2 col-sm-12"></div>
            <div className="col-lg-3 col-sm-12">
              <div className={styles.inner_fluid}>
                <ul>
                  <li>
                    {" "}
                    <h4> Post Address</h4>
                  </li>
                  <li>541 Melville Ave, Palo Alto,</li>
                  <li> CA 94301,</li>
                  <li>United States</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className={styles.inner_fluid}>
                <ul>
                  <li>
                    {" "}
                    <h4>Social Media</h4>
                  </li>
                  <li>
                    {" "}
                    <strong>Facebook</strong>{" "}
                  </li>
                  <li>
                    {" "}
                    <strong>Instagram</strong>
                  </li>
                  <li>
                    {" "}
                    <strong>Twitter</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getintouch;
