import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.jpeg";
import Social from './social'
import './header.css'
function header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Made Sanjaya</h1>
        <h5 className="text-light">Front End Web Development</h5>
        <CTA />
        <Social />

        <div className="me">
          <img src={ME} alt="Made Sanjaya's" />
        </div>
        
          <a href="#about" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
}

export default header;
