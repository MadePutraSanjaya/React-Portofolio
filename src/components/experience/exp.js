import React from "react";
import "./exp.css";
import { MdVerified } from "react-icons/md";
function exp() {
  return (
    <section id="experience">
      <h5>The Skill I Have </h5>
      <h2>My Experience</h2>

      <div className="container exp-container">
        {/* Start Front-end */}
        <div className="exp-frontend">
          <h3>Frontend Development</h3>
          <div className="exp-content">
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>HTML & CSS</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* End Of Front-end */}

        <div className="exp-frontend">
          <h3>Backend Development</h3>
          <div className="exp-content">
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>Nest Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-detail">
              <MdVerified className="exp-detail-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default exp;
