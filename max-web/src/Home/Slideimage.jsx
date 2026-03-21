import React from 'react'
import imag from '../assets/image1.jpeg'
import imag2 from '../assets/image2.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const data = [
  {
    image: imag,
  },
  {
    image: imag2,
  },
];

function Slideimage() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
    <div >
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div key={index} className="relative h-120 w-full">
              
              <img
                src={item.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slideimage