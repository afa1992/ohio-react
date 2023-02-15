import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 40.367474,
      lng: -82.996216,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>

      <div
        style={{ backgroundColor: "#151619", width: "100%", height: "50vh" }}
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
            <div className="col-lg-6 col-sm-12">
              <button
                style={{
                  backgroundColor: "#dc2828",
                  color: "#fff",
                  borderRadius: ".35rem",
                  float: "right",
                  fontSize: "16px",
                  fontWeight: "500",
                  padding: "10px 15px",
                  margin: "5rem 0 0",
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
}
