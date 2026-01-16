import React from 'react'
import '../Styles/Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const rev = [
    {
        imag: 'https://images.unsplash.com/photo-1565015804286-24e771c069b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
        name: 'sahana patil',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus amet, eveniet aspernatur illo quia velit recusandae',
    },
    {
        imag: 'https://images.unsplash.com/photo-1556125260-654cd967bb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTY3NzY3N3x8ZW58MHx8fHx8',
        name: 'srinivas',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus amet, eveniet aspernatur illo quia velit recusandae',
    },
    {
        imag: 'https://images.unsplash.com/photo-1556125260-654cd967bb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTY3NzY3N3x8ZW58MHx8fHx8',
        name: 'srinivas',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus amet, eveniet aspernatur illo quia velit recusandae',
    },
    {
        imag: 'https://images.unsplash.com/photo-1556125260-654cd967bb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTY3NzY3N3x8ZW58MHx8fHx8',
        name: 'srinivas',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus amet, eveniet aspernatur illo quia velit recusandae',
    },
    {
        imag: './vite.svg',
        name: 'srinivas',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus amet, eveniet aspernatur illo quia velit recusandae',
    },
    {
        imag: 'https://images.unsplash.com/photo-1556125260-654cd967bb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTY3NzY3N3x8ZW58MHx8fHx8',
        name: 'srinivas',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error repellendus amet, eveniet aspernatur illo quia velit recusandae',
    },
]

function Review() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="rev-cont">
      <div style={{ width: "80%", margin: "0 auto" }}>
        <Slider {...settings}>
          {rev.map((item, index) => (
            <div className="rev-card" key={index}>
              <div className="user-img">
                <img src={item.imag} alt={item.name} />
              </div>
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


export default Review