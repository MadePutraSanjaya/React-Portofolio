import React from 'react'
import './service.css'
import { BiCheckCircle } from "react-icons/bi";
function service() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service-container">
        <article className="services">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Modern Design</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Colorful Design</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Friendly Request Design</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Elegant Theme</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service-head">
            <h3>Website Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Unlimited Storage / Posting</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Free Admin</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Lifetime maintenance</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Seo Friendly</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Lifetime support</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="service-head">
            <h3>Photographer</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Friendly Request Photo Themes</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Photo Direction Professional</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Free Unlimited Photo Editing</p>
            </li>
            <li>
              <BiCheckCircle className="service-icon" />
              <p>Complete Photo Tools</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  );
}

export default service