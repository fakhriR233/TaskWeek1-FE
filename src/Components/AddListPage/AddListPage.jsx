import ContentMoviesAdmin from "../AdminHome/ContentMovies";
import ContentTVAdmin from "../AdminHome/ContentTVAdmin";
import TopNavbarAdmin from "../Utility/TopNavAdmin";
import React, { useState } from "react";
import ButtonModalAddFilm from "../AddFilm/ButtonModalAddFilm";

function AddListPage() {
  const [category, setCategory] = useState("category");
  return (
    <div className="app">
      <TopNavbarAdmin />

      <div className="row mt-5 px-5">
        <div className="col d-flex">
          <div className="pe-5">
            <h4>List Film</h4>
          </div>
          <select
            className="bg-dark text-white px-3"
            aria-label="Default select example"
            value={category}
            onChange={(e) => setCategory(() => e.target.value)}
            style={{ borderRadius: "50px solid", backgroundColor: "none" }}
          >
            <option disabled>Category</option>
            <option className="text-white bg-dark">TV Shows</option>
            <option>Movies</option>
          </select>
        </div>
        <div className="col-2">
          <ButtonModalAddFilm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {category === "TV Shows" ? (
            <ContentTVAdmin category="TV Shows" />
          ) : (
            <ContentMoviesAdmin category="Movies" />
          )}
        </div>
      </div>
    </div>
  );
}

export default AddListPage;
