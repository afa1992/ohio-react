import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import router from "../../../router";
import styled from "../Navbar/Navbar.module.scss";
import { Widget1 } from "../../MockData/NavMock";
import { Widget2 } from "../../MockData/NavMock";
import { Widget3 } from "../../MockData/NavMock";
import { Widget4 } from "../../MockData/NavMock";
import { Menus1 } from "../../MockData/NavMock";
import { Menus2 } from "../../MockData/NavMock";
import Sidebar from "../Navbar/Sidebar";

const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className="container-fluid">
        <div className="row py-3 ">
          <div className="col-md-1" id="page-wrap">
            <div id="outer-container">
              <Sidebar
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="logo">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className={styled.box}>
              <ul className={styled.after}>
                {router &&
                  router.map((router) => (
                    <li>
                      <Link to={router.path}>
                        {router.name} <BsChevronDown />
                      </Link>
                      <div className={styled.sub1_menu}>
                        <ul className={styled.sub}>
                          <p>widgets</p>
                          <li>
                            {Widget1 &&
                              Widget1.map((element) => (
                                <li key={`footer_id${element.id}`}>
                                  {element.name}
                                </li>
                              ))}
                          </li>
                        </ul>
                        <ul className={styled.sub}>
                          <p>widgets</p>
                          <li>
                            {Widget2 &&
                              Widget2.map((element) => (
                                <li key={`footer_id${element.id}`}>
                                  {element.name}
                                </li>
                              ))}
                          </li>
                        </ul>
                        <ul className={styled.sub}>
                          <p>widgets</p>
                          <li>
                            {Widget3 &&
                              Widget3.map((element) => (
                                <li key={`footer_id${element.id}`}>
                                  {element.name}
                                </li>
                              ))}
                          </li>
                        </ul>
                        <ul className={styled.sub}>
                          <p>widgets</p>
                          <li>
                            {Widget4 &&
                              Widget4.map((element) => (
                                <li key={`footer_id${element.id}`}>
                                  {element.name}
                                </li>
                              ))}
                          </li>
                        </ul>
                        <ul className={styled.sub}>
                          <p>menus</p>
                          <li>
                            {Menus1 &&
                              Menus1.map((element) => (
                                <li key={`footer_id${element.id}`}>
                                  {element.name}
                                </li>
                              ))}
                          </li>
                        </ul>
                        <ul className={styled.sub}>
                          <p> hamburger menus</p>
                          <li>
                            {Menus2 &&
                              Menus2.map((element) => (
                                <li key={`footer_id${element.id}`}>
                                  {element.name}
                                </li>
                              ))}
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))}

                {/* <div className={styled.sub2_menu}>
              <ul className={styled.sub}>
                <p>widgets</p>
                <li>
                {Widget1 &&
                    Widget1.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                 </li>
     

              </ul> 
                 <ul className={styled.sub}>
                 <p>widgets</p>
                 <li>
                {Widget2 &&
                    Widget2.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                 </li>
              </ul>
              <ul className={styled.sub}>
                <p>widgets</p>
                <li>
                {Widget3 &&
                    Widget3.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                 </li>
              </ul >
              <ul className={styled.sub}>
                <p>widgets</p>
                <li>
                {Widget4 &&
                    Widget4.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                 </li>
              </ul >
              <ul className={styled.sub}>
                <p>menus</p>
                <li>
                {Menus1 &&
                    Menus1.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                 </li>
            
              </ul>
              <ul className={styled.sub}>
                <p> hamburger menus</p>
                <li>
                {Menus2 &&
                    Menus2.map((element) => (
                      <li key={`footer_id${element.id}`}>{element.name}</li>
                    ))}
                 </li>
             
            
              </ul>
            </div> */}
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
