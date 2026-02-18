import React from 'react'
import Slider from "react-slick";
import "../Styles/Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/image1.jpeg';
import img2 from '../assets/image2.jpeg';
import img3 from '../assets/image3.jpeg';
import 'remixicon/fonts/remixicon.css';

function Productlist() {
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
    <div >
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
     
        <div className="productsection">
          <div className="up-sec"><h2>Mens Choice</h2></div>
          <div className="down-sec">
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/Subcat" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1482921921831-ae198abd8fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MTI5OTd8fGVufDB8fHx8fA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="productsection">
          <div className="up-sec"><h2>Mens Choice</h2></div>
          <div className="down-sec">
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1482921921831-ae198abd8fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MTI5OTd8fGVufDB8fHx8fA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="productsection">
          <div className="up-sec"><h2>Mens Choice</h2></div>
          <div className="down-sec">
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1482921921831-ae198abd8fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MTI5OTd8fGVufDB8fHx8fA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
            <div className="Product">
              <div className="Product-img">
                <img src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <hr /></div>
              <div className="product-details">
                <div><h3>Name:Vinscent chase </h3></div>
                <div className="buy-sec"><h5>size:medium</h5>
                  <h5>price:000</h5></div>
                <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }}>Buy Now <i className='ri-arrow-right-fill' style={{ fontSize: "20px", marginRight: "5px" }}></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

 
  )
}

export default Productlist