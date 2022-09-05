import React from "react";
import TopNavbar from "../Utility/TopNavbar";
import data from "../data/datatvshows.json";
import BannerMovies from "./BannerMovies";
import Content2 from "../Home/Content2";

function Movies() {
  console.log(data);
  return (
    <div className="app">
      <TopNavbar />
      <BannerMovies data={data} />
      <Content2 category="TV Series" data={data} />
    </div>
  );
}

export default Movies;
