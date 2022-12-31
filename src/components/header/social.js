import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
function social() {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/i-made-adi-putra-sanjaya-9343a5242/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/MadePutraSanjaya" target="blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/made.sanjaya.52035/" target="blank">
        <GrFacebookOption />
      </a>
    </div>
  );
}

export default social