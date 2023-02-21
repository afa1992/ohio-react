import React from "react";
import styles from "../Input/Input.module.scss";

const Input = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.form}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <label htmlFor="">Name(requierd)</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="col-md-4 col-sm-12">
              <label htmlFor="">Company(requierd)</label>
              <input type="text" placeholder="Your company name" />
            </div>
            <div className="col-md-4 col-sm-12">
              <label htmlFor="">Email(requierd)</label>
              <input type="email" placeholder="Your email " />
            </div>
            <div className="col-md-4 col-sm-12">
              <label htmlFor="">Phone(optional)</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Your phone number"
              />
            </div>
            <div className="col-md-4 col-sm-12">
              <label htmlFor="">Subject(optinal)</label>
              <input type="text" placeholder="Choose a subject" />
            </div>
            <div className="col-md-4 col-sm-12">
              <label htmlFor="">Choose a Budget (USD)</label>
              <select name="" id="">
                <option value="">Less than 5K</option>
                <option value="">5K - 10K</option>
                <option value="">Over 10K</option>
              </select>
            </div>
            <div className="col-md-12 col-sm-12">
              <label htmlFor=""> Project details</label>
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="Brief project details"
              ></textarea>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className={styles.check}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">
                  I’m okay with getting emails and having that activity tracked
                  to improve my experience.
                </label>
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <button className={styles.optional}>Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Input;
