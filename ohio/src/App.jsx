import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import router from "../src/router";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styled from "../src/App.module.scss";
import Layout from "./Components/Layout/Layout";
import Barleft from "./Components/Barleft/Barleft";
import Barright from "./Components/Barright/Barright";
import Navbar from "./Components/Layout/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className={styled.box}>
          <ClimbingBoxLoader
            color={"black"}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : window.location.pathname === "/" ? (
        <Layout>
          <Routes>
            {router.map((router) => (
              <React.Fragment key={router.path}>
                <Route path={`${router.path}`} element={router.component} />
              </React.Fragment>
            ))}
          </Routes>
          <Barleft />
          <Barright />
        </Layout>
      ) : (
        <>
          <Navbar />
          <Routes>
            {router.map((router) => (
              <React.Fragment key={router.path}>
                <Route path={`${router.path}`} element={router.component} />
              </React.Fragment>
            ))}
          </Routes>

          <Barleft />
          <Barright />
        </>
      )}
    </div>
  );
}

export default App;
