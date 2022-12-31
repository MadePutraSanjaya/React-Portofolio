import React from 'react'
import './footer.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr";
function footer() {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Made Sanjaya
      </a>

      <ul className="link">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-social">
        <a href="https://www.facebook.com/made.sanjaya.52035/">
          <GrFacebookOption />
        </a>
        <a href="https://instagram.com/mdsanjaya._">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.linkedin.com/in/i-made-adi-putra-sanjaya-9343a5242/">
          <GrLinkedinOption />
        </a>
      </div>

      <div className="copyright">
        <small>&copy; Made Sanjaya. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default footer