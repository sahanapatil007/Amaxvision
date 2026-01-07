import React from "react";
import 'remixicon/fonts/remixicon.css';
import '../Styles/Nav.css';

function Nav() {
    return (
        <div>
            <div className="nav">
                <div className="top">
                    <div className="right">
                        <span className="vision" >AMaxVision</span>
                    </div>
                    <div className="left">
                        <a href="/">Eyeglasses</a>
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