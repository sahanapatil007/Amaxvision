import React from "react";
import 'remixicon/fonts/remixicon.css';
import '../Styles/Nav.css';
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className="nav">
                <div className="top">
                    <div className="right">
                        <span className="vision" >AMaxVision</span>
                    </div>
                    <div className="left">
                        < Link to={'/'}>Home</Link>
                         < Link to={'/Product'}>Eyeglasses</Link>
                        <a href="/">Contactlenses</a>
                        <a href="/">Eyetest</a>
                        <a href="/">Why Us</a>
                        <a href="/">Contact</a>
                        <a href="/">Track ur Order</a>
                    </div>
                </div>
                <div className="down">
                </div>

            </div>
        </div>
    );
};

export default Nav;