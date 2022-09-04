import React from "react";
import TopNavbar from "../Utility/TopNavbar";

import Banner from "./Banner";
import Content from "./Content";
import Navbar from "./TopNavbars";

function HomeScreen() {
  return (
    <div className="app">
      <TopNavbar />
      <Banner />
      <Content category="TV Series" />
      <Content category="Movies" />
    </div>
  );
}

export default HomeScreen;
