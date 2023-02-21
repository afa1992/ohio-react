import React from "react";
import { useState } from "react";
import "../Navbar/Burger.scss";
import { AiOutlinePlus } from "react-icons/ai";
const Burger = () => {
  // TO CHANGE BURGER CLASSES
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setisMenuClicked] = useState("false");
  //toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setisMenuClicked(!isMenuClicked);
  };

  return (
    <div className="side_menu">
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burger_class}> </div>
        <div className={burger_class}> </div>
        <div className={burger_class}> </div>
      </div>
      <div className={menu_class}>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-3 m-0 p-0 ">
              <ol>
                <li>
                  Pages <AiOutlinePlus />
                  <ul className="nav_menu">
                    <li>About</li>
                    <li>Contact</li>
                    <li>404 Page</li>
                    <li>Coming Soon</li>
                    <li>Sign Up</li>
                  </ul>
                </li>
                <li>
                  Projects <AiOutlinePlus />
                  <ul className="nav_menu">
                    <li>Grid View</li>
                    <li>Slider</li>
                    <li>Single Project</li>
                  </ul>
                </li>
                <li>
                  Blog <AiOutlinePlus />
                  <ul className="nav_menu">
                    <li>Grid View</li>

                    <li>Single Post</li>
                  </ul>
                </li>
                <li>
                  Shop <AiOutlinePlus />
                  <ul className="nav_menu">
                    <li>Grid View</li>

                    <li>Single Product</li>
                  </ul>
                </li>
                <li>
                  Purchase <AiOutlinePlus />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
