import React from "react";
import TopNavbar from "../Utility/TopNavbar";
import AddListButton from "./AddListButton";
import Content from "../Home/Content";
import ContentTV from "../Home/ContentTV";

function AddListPage() {
  return (
    <div className="app">
      <TopNavbar />
      <AddListButton />
      <ContentTV category="TV Series" />
      <Content category="Movies" />
    </div>
  );
}

export default AddListPage;
