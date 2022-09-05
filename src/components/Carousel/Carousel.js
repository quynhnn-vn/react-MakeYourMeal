import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img4 from "../../images/carousel/4.png";
import img5 from "../../images/carousel/5.png";
import img6 from "../../images/carousel/6.png";

import "./Carousel.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };
  return (
    <Slider {...settings}>
      <div className="carousel">
        <img src={img4} alt="4" />
      </div>
      <div className="carousel">
        <img src={img5} alt="5" />
      </div>
      <div className="carousel">
        <img src={img6} alt="6" />
      </div>
    </Slider>
  );
}
