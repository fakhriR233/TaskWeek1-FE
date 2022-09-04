import React from "react";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350")`,
      }}
    >
      <div className="container">
        <div className="banner_content">
          <h1 className="banner_title">judul Title banner</h1>
          <p className="banner_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            faucibus orci. Sed at sapien ac nulla mattis luctus id et justo.
            Mauris convallis venenatis augue eget vestibulum. Donec cursus elit
            velit, ac porttitor neque volutpat maximus. Nam et tellus tempor,
            ultrices arcu eget, elementum urna. Phasellus malesuada dui nec.
          </p>
          <div>
            <span className="me-3 fw-lighter">2019</span>
            <button className="btn btn-outline-light btn-sm">
              category film
            </button>
          </div>
          <button className="btn btn-danger btn-md mt-3 banner_button_play">
            Play Now
          </button>
        </div>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
