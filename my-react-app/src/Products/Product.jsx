import React from "react";
import Slider from "react-slick";
import "../Styles/Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            src="https://images.unsplash.com/photo-1589176449149-71f7ea77ec25"
            alt="spex 1"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
            alt="spex 2"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
            alt="spex 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Product;





