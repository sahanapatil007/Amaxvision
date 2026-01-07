import React from "react";
import '../Styles/Home.css';
import Nav from "./Nav";
import '../Styles/Nav.css'
import Category from "./Category";
import '../Styles/Category.css';
import Size from "./Size";
import About from "./About";
import Footer from "./Footer";
function Home() {
    return (
        <div>
            <Nav/>
            <div className="image-cont">
                <div className="image-cont2">
                    <div className="image-row">
                        <div className="img1"><img id="img1"
                            src="https://images.unsplash.com/photo-1556125260-654cd967bb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MTY3NzY3N3x8ZW58MHx8fHx8"
                            alt=""  /></div>
                        <div className="img2"><img
                            src="https://images.unsplash.com/photo-1482921921831-ae198abd8fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw2MTI5OTd8fGVufDB8fHx8fA%3D%3D"
                            alt=""  /></div>
                    </div>
                    <div className="image-row1">
                        <div className="img3"><img
                            src="https://images.unsplash.com/photo-1531384698654-7f6e477ca221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNDk0ODEyfHxlbnwwfHx8fHw%3D"
                            alt=""  /></div>
                        <div className="img4"><img id="img2"
                            src="https://images.unsplash.com/photo-1488203602058-8db2ce840718?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXN8ZW58MHx8MHx8fDA%3D"
                            alt=""  /></div>
                    </div>
                    <div className="image-row2">
                        <div className="img5"><img id="img3"
                            src="https://images.unsplash.com/photo-1494005826588-25b58776edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="" /></div>
                        <div className="img6"><img
                            src="https://images.unsplash.com/photo-1565015804286-24e771c069b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwZWN0YWNsZXxlbnwwfHwwfHx8MA%3D%3D"
                            alt=""  /></div>
                    </div>
                </div>
            </div>
            <Category />
            <Size />
             <About />
             <Footer />
            </div>
        );
        };

export default Home;