import React from "react";
import TopNavbar from "../Utility/TopNavbar";

import Banner from "./Banner";
import Content from "./Content";
import Content2 from "./Content2";
import data1 from "../data/datatvshows.json";

function HomeScreen() {
  return (
    <div className="app">
      <TopNavbar />
      <Banner data={data1} />
      <Content2 category="TV Series" />
      <Content category="Movies" />
    </div>
  );
}

export default HomeScreen;
