import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../Styles/Category.css";

function Category() {
  const menRef = useRef(null);
  const womenRef = useRef(null);

  useEffect(() => {
    gsap.set(menRef.current, { left: "0%" });
    gsap.set(womenRef.current, { left: "110%" });
  }, []);

  const showSection = (section) => {
    gsap.to([menRef.current, womenRef.current], {
      left: "110%",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(section, {
      left: "0%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="page2">
      <div className="category">
        <h2>Shop by Category</h2>

        <div className="section">
          <div className="top">
            <p onClick={() => showSection(menRef.current)}>Men</p>
            <p onClick={() => showSection(womenRef.current)}>Women</p>
          </div>

          <div className="down">
            <div id="men" ref={menRef}>
              <div className="row1">
                <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/men/men_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
              <div className="row1">
                <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/men/men_sunglasses.png" alt="" /> 
                <h4>Sunglasses</h4>
                 </div>
              <div className="row1"> <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/men/men_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
              <div className="row1"> <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/men/men_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
            </div>

            <div id="women" ref={womenRef}>
              <div className="row1">
                <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/women/women_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
              <div className="row1">
                <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/women/women_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
              <div className="row1">
                <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/women/women_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
              <div className="row1">
                <img src="https://d3995ea24pmi7m.cloudfront.net/fit-in/132x132/ft-media/wysiwyg/ft-v2/shop-by-category/women/women_eyeglasses.png" alt="" />
                <h4>Eyeglasses</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;



