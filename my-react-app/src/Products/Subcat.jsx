import React, { useState } from 'react'
import "../Styles/Subcat.css";

const proddetails = [
  [
    {
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1500,
      size: 'medium',
      ratings: '****',
    },
    {
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1200,
      size: 'medium',
      ratings: '****',
    },
    {
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 2000,
      size: 'medium',
      ratings: '****',
    }
  ],
  [
    {
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1500,
      size: 'medium',
      ratings: '****',
    },
    {
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1200,
      size: 'medium',
      ratings: '****',
    },
    {
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 2000,
      size: 'medium',
      ratings: '****',
    }
  ]
]

function Subcat() {
  const [click, setclick] = useState('none');
  console.log(click)
  return (
    <div className='subcat'>
      <div className="left">
        <div className='framesize'>
          <select name="Framesize" id="Framesize">
            <option value="Rectangle">Rectangle</option>
            <option value="Square">square</option>
          </select>
        </div>
      </div>
      <div className="right">
        {Object.entries(proddetails).map(([key, list]) => (
          <div className="subsection" key={key}>
            <div className="downsec">
              {list.map((item, index) => (
                <div className="Products" key={index}>
                  <div className="Productimg">
                    <img src={item.img} alt="" />
                    <hr /></div>
                  <div className="productdetails">
                    <div><h3>Name:{item.name} </h3></div>
                    <div className="buy-sec"><h5>size:{item.size}</h5>
                      <h5>price:{item.price}</h5></div>

                    <a href="/" style={{ padding: '0.2rem', textDecoration: "None" }} >Buy Now <i className='ri-arrow-right-fill'
                      style={{ fontSize: "20px", marginRight: "5px" }} onClick={() => { setclick(item.name) }}></i> </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Subcat
