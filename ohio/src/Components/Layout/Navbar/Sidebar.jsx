import React from "react";
import "../Navbar/Sidebar.scss";
import { slide as Menu } from "react-burger-menu";

const Sidebar = () => {
  return (
    <Menu>
      <ol>
        <li className="menu-item" href="/">
          Pages
        </li>
        <li className="menu-item" href="/">
          Projects
        </li>
        <li className="menu-item" href="/">
          Blog
        </li>
        <li className="menu-item" href="/">
          Shop
        </li>
        <li className="menu-item" href="/">
          Purchase
        </li>
      </ol>
    </Menu>
  );
};

export default Sidebar;
