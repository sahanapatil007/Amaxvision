import React from "react";
import "../Styles/About.css";

export default function Page4() {
  return (
    <section className="page4">
        <h2 className="Why">Why Us</h2>
      <div className="about">
        
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?w=600&auto=format&fit=crop&q=60"
            alt="Eyewear display"
          />
        </div>

        <div className="about-content">
          <p>
            <strong>Max Vision</strong> is committed to providing quality eyewear with a focus on clarity, comfort, and contemporary design.
            We aim to make reliable eye care accessible while offering frames that suit different styles and preferences.
          </p>

          <p>
            Our approach is simple — honest service, transparent pricing, and products that meet everyday needs.
            At Max Vision, we value trust and ensure every customer receives accurate guidance and a comfortable shopping experience.
          </p>

          <p>
            With modern designs and dependable optical standards, Max Vision delivers eyewear that helps you see clearly and look confident.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= Page4.css ================= */

