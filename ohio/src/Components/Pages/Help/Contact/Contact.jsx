import React from "react";
import styles from "../Contact/Contact.module.scss";
import AOS from "aos";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init(5000);
  }, []);

  return (
    <section className={styles.agency}>
      <div className="container">
        <div className="row">
          <div className={styles.holder}>
            <div className="col-md-12" data-aos="fade-up">
              <h1>Contact: Agency</h1>
              <div className={styles.meta_holder}>
                Leave us a little info, and we’ll be in touch.
              </div>
              <br />
              <button className={styles.optional}>Send Us an Email</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
