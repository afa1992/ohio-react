import React from "react";

const Join = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#151619",
          width: "100%",
          height: "55vh",
          padding: "30px 0",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div
                style={{
                  color: "#82838a",
                  fontSize: "0.9em",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  padding: "1.5rem 0 1rem",
                }}
              >
                Careers
              </div>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "3.25em",
                  fontWeight: "bold",
                  lineHeight: "1.05",
                  padding: "1.5rem 0",
                }}
              >
                Join our team.
              </h2>
            </div>
            <div className="col-lg-6 col-sm-12 text-center ">
              <button
                style={{
                  backgroundColor: "#dc2828",
                  color: "#fff",
                  borderRadius: ".35rem",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 15px",
                  margin: "1rem 0",
                }}
              >
                See Open Positions
              </button>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div
                style={{
                  borderTop: "1px solid  rgba(99,93,111,0.65) ",
                  color: "#fff",
                  padding: "1.5rem 0",
                }}
              >
                We’re <strong>a team of creatives</strong> who are excited about
                unique ideas and help fin-tech <br /> companies to
                <strong>create amazing identity</strong> by crafting top-notch
                UI/UX.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
