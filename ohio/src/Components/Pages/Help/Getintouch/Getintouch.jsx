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
        <div className="row">
          <div className={styles.bottom}>
            <div className="col-md-4">
              <div className={styles.col_inner}>
                <div className={styles.inner_fluid}>
                  <h4> Get in touch</h4>

                  <ul>
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
                <div className={styles.inner_fluid}>
                  <h6>
                    {" "}
                    <br /> <br />
                  </h6>
                  <ul>
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
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <div className={styles.col_inner}>
                <div className={styles.inner_fluid}>
                  <h4> Get in touch</h4>
                  <ul>
                    <li>541 Melville Ave, Palo Alto,</li>
                    <li> CA 94301,</li>
                    <li>United States</li>
                  </ul>
                </div>
                <div className={styles.inner_fluid}>
                  <h4>Post address</h4>
                  <ul>
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
      </div>
    </section>
  );
};

export default Getintouch;
