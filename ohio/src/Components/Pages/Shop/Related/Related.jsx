import React from "react";
import { RelatedProducts } from "../../../MockData/CardMock";
import styled from "../Related/Related.module.scss";
const Related = () => {
  return (
    <section className={styled.related}>
      <div className="container py-5">
        <h3>Related products</h3>
        <div className="row">
          {RelatedProducts &&
            RelatedProducts.map((element) => {
              return (
                <div
                  className="col-md-4 col-lg-4 col-sm-12"
                  key={`product_id${element.id}`}
                >
                  <div className={styled.card}>
                    <img
                      src={element._Img}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body text-left p-3">
                      <h5>{element.title}</h5>
                      <p>{element.category}</p>
                      <span>{element.price}</span>
                    </div>
                    <div className={styled.hover}>
                      <button>Add to Cart</button>
                      <button>Save</button>
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

export default Related;
