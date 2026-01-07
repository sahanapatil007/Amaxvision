import React from 'react'
import '../Styles/Footer.css';
import 'remixicon/fonts/remixicon.css';

function Footer() {
  return (
    <div><footer>
    <div className="up">
        <div className="links">
          <h2>AmaxVision</h2>
          <h3><a href="">My Account</a></h3>
          <h3><a href="">About MaxVision</a></h3>
          <h3><a href="">Eyeglasses</a></h3>
          <h3><a href="">Contactlens</a></h3>
        </div>
        <p className='Para'></p>
        <div className="contact">
          <h2>For More quires or information regrading or for eye testing and  any questions ContactUs from given below ids</h2>
          <div className="contact-1">
           <h4> <i className="ri-instagram-line" style={{ fontSize: "35px", marginRight: "5px" }} ></i>maxvision@insta</h4>
            <h4><i className="ri-whatsapp-fill" style={{ fontSize: "35px", marginRight: "5px" }} ></i>1234567890</h4>
            <h4><i className="ri-mail-line" style={{ fontSize: "35px", marginRight: "5px" }} ></i>Amaxvision</h4>
          </div>
          
        </div>
    </div>
    <div className="down-foot">
      <p><i className="ri-copyright-line"></i>copy right</p>
    </div>
  </footer></div>
  )
}

export default Footer;