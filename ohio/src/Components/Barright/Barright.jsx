import React from "react";
import styled from "../Barright/Barright.module.scss";

const Barright = () => {
  return (
    <div className={styled.right}>
      <div className={styled.switcher}>
        <div className={styled.dark_mood}>
          <span>Follow us -- Yt./ Be./ Tk.</span>
        </div>
      </div>
    </div>
  );
};

export default Barright;
