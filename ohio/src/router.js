import Home from "../src/Components/Pages/Home/Home";
import Elements from "../src/Components/Pages/Elements/Elements";
import Portfolio from "../src/Components/Pages/Portfolio/Portfolio";
import Blog from "../src/Components/Pages/Blog/Blog";
import Shop from "../src/Components/Pages/Shop/Shop";
import Pages from "../src/Components/Pages/About/About";
import About from "../src/Components/Pages/About/About";
import Changelog from "../src/Components/Pages/Changelog/Changelog";

const router = [
  {
    id: Math.random(),
    name: "Home",
    path: "/",
    exact: true,
    component: <Home />,
  },
  {
    id: Math.random(),
    name: "Elements",
    path: "/elements",
    exact: true,
    component: <Elements />,
  },
  {
    id: Math.random(),
    name: "Portfolio",
    path: "/portfolio",
    exact: true,
    component: <Portfolio />,
  },

  {
    id: Math.random(),
    name: "Blog",
    path: "/blog",
    exact: true,
    component: <Blog />,
  },
  {
    id: Math.random(),
    name: "Shop",
    path: "/shop",
    exact: true,
    component: <Shop />,
  },
  {
    id: Math.random(),
    name: "Pages",
    path: "/pages",
    exact: true,
    component: <Pages />,
  },
  {
    id: Math.random(),
    name: "About",
    path: "/about",
    exact: true,
    component: <About />,
  },

  {
    id: Math.random(),
    name: "Changelog",
    path: "/changelog",
    exact: true,
    component: <Changelog />,
  },
];

export default router;
