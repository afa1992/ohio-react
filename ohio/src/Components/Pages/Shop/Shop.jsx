import React from "react";
import Standart from "./StandartProduct/Standart";
import ContactFoot from "../About/ContactFoot/ContactFoot";
import ShowHide from "./ShowHide/ShowHide";
import Related from "./Related/Related";
const Shop = () => {
  return (
    <div>
      <Standart />
      <ShowHide />
      <Related />
      <ContactFoot />
    </div>
  );
};

export default Shop;
