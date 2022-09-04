import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function Content(props) {
  return (
    <div className="container">
      <div className="content_row">
        {/* title */}
        <h2 className="mt-4">{props.category}</h2>

        {/* cards horizontal */}
        <div className="cards_row">
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/movies/1" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                  alt="img_size"
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                  alt="giblog"
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#" className="card_item">
                <img
                  className="img_size"
                  src={require("../../Images/default.png")}
                />
                <h5 className="mt-3">Judul Film</h5>
                <p className="fw-lighter">2019</p>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Content;
