import React, { useState } from 'react'
import '../Styles/Product.css'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'; 

function Proddetails() {
  const {state} = useLocation();
  const [open ,setopen]= useState(false)
  return (
    <div className='details'>
        <div className='details-box'>
             <div className="left-box"><img src={state?.image} alt=""  /></div>
             <div className="right-box">
              <h2>{state?.name}</h2>
              <h4>size</h4>
              <div><button onClick={()=>setopen(!open)} >Add to Cart</button></div>
             </div>
             {open ? (
              <div className='addtocart'>
                 <div className='outer-cart'>
                  <h1>choose the lens </h1>
                  <i className='ri-close-line' onClick={()=>setopen(!open)}/>
                 </div>
                  <div className='inner-cart'>
                    <div className='inner-cart1'>
                          <h2>hii</h2>
                    </div><hr />
                    <div className='inner-cart1'>
                         <h2>hellooo</h2>
                    </div><hr />
                    <div className='inner-cart1'>

                    </div><hr />
                   
                  </div>
             </div>
             ) : null}
        </div>
    </div>
  )
}

export default Proddetails