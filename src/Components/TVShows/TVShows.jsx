import React, { Component } from "react";
import Content from "../Home/Content";
import TopNavbar from "../Utility/TopNavbar";
import BannerTv from "./BannerTv";
import data from "../data/datamovies.json";

export default class TVShows extends Component {
  render() {
    return (
      <div className="app">
        <TopNavbar />
        <BannerTv data={data} />
        <Content category="TV Series" data={data} />
      </div>
    );
  }
}
