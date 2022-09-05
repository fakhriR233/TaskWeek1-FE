import React from "react";
import TopNavbar from "../Utility/TopNavbar";
import data from "../data/datatvshows.json";
import BannerMovies from "./BannerMovies";
import ContentTV from "../Home/ContentTV";

function Movies() {
  console.log(data);
  return (
    <div className="app">
      <TopNavbar />
      <BannerMovies data={data} />
      <ContentTV category="TV Series" data={data} />
    </div>
  );
}

export default Movies;
