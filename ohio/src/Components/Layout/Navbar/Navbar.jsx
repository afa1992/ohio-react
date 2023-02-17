import React from "react";
import { BsChevronDown, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
// import router from "../../../router";
import styled from "../Navbar/Navbar.module.scss";
import { Archive1, Widget1, ShopPages } from "../../MockData/NavMock";
import { Widget2, Archive2, Category } from "../../MockData/NavMock";
import { Widget3, SinglePost, ProductTypes } from "../../MockData/NavMock";
import { Widget4, PaginationTypes, ArchivePort } from "../../MockData/NavMock";
import {
  Menus1,
  HoverEffects,
  Sliders,
  ContactAgency,
} from "../../MockData/NavMock";
import { Menus2, AppearEffects, SingleProject } from "../../MockData/NavMock";
// import Sidebar from "../Navbar/Sidebar";
import Burger from "./Burger";
const Navbar = () => {
  return (
    <nav className={styled.nav}>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-1 m-0 p-0">
            <Burger />
          </div>
          <div className="col-md-2">
            <div className="logo pt-3">
              <img
                src="https://colabrio.ams3.cdn.digitaloceanspaces.com/stage.clbthemes.com/LitFhpPB-OhioLogo.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-9">
            <div className={styled.box}>
              <ul className={styled.after}>
                <li>
                  {" "}
                  <Link to="/" className={styled.help}>
                    Home <BsChevronDown />
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link className={styled.elements} to="/elements">
                    Elements <BsChevronDown />
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
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/portfolio" className={styled.portfolio}>
                    Portfolio <BsChevronDown />
                    <div className={styled.sub3_menu}>
                      <ul className={styled.sub}>
                        <p>ARCHIVE</p>
                        <li>
                          {ArchivePort &&
                            ArchivePort.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>ARCHIVE</p>
                        <li>
                          {Sliders &&
                            Sliders.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>SingleProject</p>
                        <li>
                          {SingleProject &&
                            SingleProject.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>pagination types</p>
                        <li>
                          {PaginationTypes &&
                            PaginationTypes.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>Hover Effects</p>
                        <li>
                          {HoverEffects &&
                            HoverEffects.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p> Appear Effects</p>
                        <li>
                          {AppearEffects &&
                            AppearEffects.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/blog" className={styled.blog}>
                    Blog <BsChevronDown />
                    <div className={styled.sub2_menu}>
                      <ul className={styled.sub}>
                        <p>ARCHIVE</p>
                        <li>
                          {Archive1 &&
                            Archive1.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>ARCHIVE</p>
                        <li>
                          {Archive2 &&
                            Archive2.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>SINGLE POST</p>
                        <li>
                          {SinglePost &&
                            SinglePost.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>pagination types</p>
                        <li>
                          {PaginationTypes &&
                            PaginationTypes.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>Hover Effects</p>
                        <li>
                          {HoverEffects &&
                            HoverEffects.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p> Appear Effects</p>
                        <li>
                          {AppearEffects &&
                            AppearEffects.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/shop" className={styled.shop}>
                    Shop <BsChevronDown />
                    <div className={styled.sub4_menu}>
                      <ul className={styled.sub}>
                        <p>ARCHIVE</p>
                        <li>
                          {Archive1 &&
                            Archive1.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>Appear Effects</p>
                        <li>
                          {AppearEffects &&
                            AppearEffects.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p>SINGLE POST</p>
                        <li>
                          {SinglePost &&
                            SinglePost.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p> Shop Pages</p>
                        <li>
                          {ShopPages &&
                            ShopPages.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p> Product Types</p>
                        <li>
                          {ProductTypes &&
                            ProductTypes.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                      <ul className={styled.sub}>
                        <p> Category</p>
                        <li>
                          {Category &&
                            Category.map((element) => (
                              <li key={`footer_id${element.id}`}>
                                {element.name}
                              </li>
                            ))}
                        </li>
                      </ul>
                    </div>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/pages" className={styled.pages}>
                    Pages <BsChevronDown />
                    <ul className={styled.mini_menu}>
                      <li>
                        {" "}
                        About <BiPlus />{" "}
                      </li>
                      <li>
                        {" "}
                        Contact <BiPlus />
                        <div className={styled.sub5_menu}>
                          <ul className={styled.sub}>
                            <li>
                              {ContactAgency &&
                                ContactAgency.map((element) => (
                                  <li key={`footer_id${element.id}`}>
                                    {element.name}
                                  </li>
                                ))}
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        Pages <BiPlus />
                      </li>
                    </ul>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/help" className={styled.help}>
                    Help <BsChevronDown />
                    <ul className={styled.mini_menu}>
                      <li>Documentation </li>
                      <li>Help Center </li>
                      <li>Sumbmit a Ticket </li>
                    </ul>
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/changelog" className={styled.help}>
                    Changelog{" "}
                  </Link>{" "}
                </li>
              </ul>
              <div className={styled.optional}>
                <select name="" id="">
                  <option value="">En</option>
                  <option value="">Ru</option>
                  <option value="">Az</option>
                </select>
                <BsSuitHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
