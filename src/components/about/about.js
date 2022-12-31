import React from 'react'
import './about.css'
import San from '../../assets/sanjaya.jpeg'
import { FaAward } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { VscFolderActive } from "react-icons/vsc";
function about() {
  return (
    <section id="about">
      <h5>Let's Get To Know More</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-image">
            <img src={San} alt="Sanjaya's Images" srcset="" />
          </div>
        </div>

        <div className="about-content">
          <div className="cards">
            <article className="card">
              <FaAward className="about-icons" />
              <h5>Experience</h5>
              <small>3+ Years Working As Front End Web Development</small>
            </article>
            <article className="card">
              <AiOutlineUser className="about-icons" />
              <h5>Clients</h5>
              <small>20+ Happy Clients</small>
            </article>
            <article className="card">
              <VscFolderActive className="about-icons" />
              <h5>Projects</h5>
              <small>30+ Complated Project</small>
            </article>
          </div>
          <p>
            Hello all, My full name is I Made Adi Putra Sanjaya, you can call me
            Made Sanjaya or Sanjaya. I have a big interest in Front End
            Development, I'm just happy to see how the code I have made turns
            into the look I want, it to be a matter of pride for me. I have
            curiosity and keep learn about technology and I hope to be a great
            front end developer in future.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default about