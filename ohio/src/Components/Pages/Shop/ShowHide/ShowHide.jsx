import React, { useState, useEffect } from "react";
import styled from "../ShowHide/ShowHide.module.scss";
function ShowHide() {
  const [isActive, setIsActive] = useState({
    id: "divOne",
  });
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  const hideShowDiv = (e) => {
    setIsActive({
      id: e.target.id,
    });
  };
  return (
    <section>
      <div className="container">
        <div className="row ">
          <div className="col-6">
            <div className={styled.grid}>
              {/* <div className="d-grid ">
              
              </div> */}
              <button
                id="divOne"
                onClick={(e) => {
                  hideShowDiv(e);
                }}
                className="btn "
              >
                Description
              </button>
              {/* <div className="d-grid ">
          
              </div> */}
              <button
                id="divTwo"
                onClick={(e) => {
                  hideShowDiv(e);
                }}
                className="btn "
              >
                Additional Information
              </button>
              {/* <div className="d-grid ">
             
              </div> */}
              <button
                id="divThree"
                onClick={(e) => {
                  hideShowDiv(e);
                }}
                className="btn "
              >
                Review(0)
              </button>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <div className={styled.showhide}>
        <div className="container ">
          <div className="row">
            <div
              className={isActive.id === "divOne" ? `divOne` : "divOne d-none"}
            >
              <div className="Description">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <h5>Online Return & Exchange Policy</h5>
                    <p>
                      If you are not satisfied with your purchase, return it to
                      us for an exchange or refund, subject to the following
                      terms.
                    </p>
                    <h5>Shipping & Handling</h5>
                    <p>
                      For all the orders containing only Gift Cards, standard
                      shipping cost is US$25. Gift Cards are shipped separately
                      from merchandise and cannot be delivered to a P.O. Box.
                    </p>

                    <div className={styled.inner}>
                      <div className="inner_col">
                        <span>65%</span> <br />
                        <strong>Economy – US $20</strong>
                        <p>Allow 7-11 working days for delivery.</p>
                      </div>
                      <div className="inner_col">
                        <span>85%</span> <br />
                        <strong>Standart – US $25</strong>
                        <p>Allow 5-8 working days for delivery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <img
                      src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/sM7eC9xC-product_attachement2.jpeg"
                      alt=""
                      width={"600"}
                      height={"500"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={isActive.id === "divTwo" ? `divTwo` : "divTwo d-none"}
            >
              <div className="Additional Information ">
                <div className="row">
                  <div className="col-4">Store</div>
                  <div className="col-8">Covina,San Diyego</div>
                </div>
              </div>
            </div>
            <div
              className={
                isActive.id === "divThree" ? `divThree` : "divTwo d-none"
              }
            >
              <div className="Reviews(0) ">
                <div className="row ">
                  <div className="col-4">
                    <h4>Reviews</h4>
                    <p>There are no reviews yet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ShowHide;
