import React from "react";
import Slider from "react-slick";
import "../Styles/Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';

function Product() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="spex 1"
          />
        </div>
        <div>
          <img
            src={img2}
            alt="spex 2"
          />
        </div>
        <div>
          <img
            src={img3}
            alt="spex 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Product;





