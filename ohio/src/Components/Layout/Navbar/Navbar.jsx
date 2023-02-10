import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import router from "../../../router";
import styled from "../Navbar/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className="container-fluid">
        <div className="row py-3 ">
          <div className="col-md-3">
            <div className="logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className={styled.after}>
              <ul>
                {router &&
                  router.map((router) => (
                    <li>
                      <Link to={router.path}>
                        {router.name} <BsChevronDown />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-md-1">
            <button className="optional">Getting Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
