import React, { useEffect, useRef, useState } from 'react'
import "../Styles/Subcat.css";
import { useNavigate } from 'react-router-dom';

const proddetails = [
  [
    {
      id: 1,
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1500,
      size: 'medium',
      ratings: '****',
    },
    {
      id: 2,
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1200,
      size: 'medium',
      ratings: '****',
    }
  ],
  [
    {
      id:3,
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1500,
      size: 'medium',
      ratings: '****',
    },
    {
      id:4,
      name: 'Vinscent chase',
      img: 'https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D',
      price: 1200,
      size: 'medium',
      ratings: '****',
    }
  ]
]

function Subcat() {

  const [clicked , setclicked] = useState(false)
  const [choose,setchoose] = useState('')
  const navigate = useNavigate()
  
  console.log(clicked)
  console.log(choose)
  return (
    <div className='subcat'>
      <div className="left">
        <div className='framesize'>
          <div className='heading' onClick={()=>setclicked(prev=>!prev)}><h3>framesize</h3></div>

          {clicked ? (
            <div className='frames'>
              <div className='Rect'>
                 <label>
                <input
                  type="checkbox"
                  checked={choose === "Rectangle"}
                  onChange={() => setchoose("Rectangle")}
                />
                Rectangle
              </label>
              </div>
              <div className='Square'>
                  <label>
                <input
                  type="checkbox"
                  checked={choose === "Square"}
                  onChange={() => setchoose("Square")}
                />
                Square
              </label>
              </div>
            </div>
          ) : null}
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
                  </div>
                  <div className="productdetails">
                    <div><h3>Name:{item.name} </h3></div>
                    <div className="buy-sec"><h5>size:{item.size}</h5>
                      <h5>price:{item.price}</h5></div>

                    <button style={{ padding: '0.2rem' }} onClick={()=>navigate("/Productdetails",{
                      state:{id:item.id,name:item.name,image:item.img}
                    })} >Buy Now <i className='ri-arrow-right-fill'
                      style={{ fontSize: "20px", marginRight: "5px" }} ></i> </button>
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
