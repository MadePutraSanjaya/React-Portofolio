import React from "react";
import "./portofolio.css";
import {porto1, porto2, porto3, porto4, porto5, porto6} from "../../assets/image";

function portofolio() {
  const Data = [
    {
      id: 1,
      image: porto1,
      title: "Slukat Learning Center Website",
      alt: "Slukat Learning Center Website",
      live: "https://slukatbali.or.id",
    },
    {
      id: 2,
      image: porto2,
      title: "Quality Care Rental Bali Website",
      alt: "Quality Care Rental Bali Website",
      live: "https://qucarentalbali.com",
    },
    {
      id: 3,
      image: porto3,
      title: "Kampung Kode Website ",
      alt: "Kampung Kode Website",
      live: "https://kampungkode.org",
    },
    {
      id: 4,
      image: porto4,
      title: "Peak Season Website",
      alt: "Peak Season Website",
      live: "https://peakseason.id",
    },
    {
      id: 5,
      image: porto5,
      title: "E Club Ubud Website",
      alt: "E Club Ubud Website",
      live: "https://eclububud.com",
    },
    ,
    {
      id: 6,
      image: porto6,
      title: "Movie Website",
      alt: "E Club Ubud Website",
      live: "https://movietmdb.vercel.app",
    },
  ];
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container porto-container">
        {Data.map(({ id, image, title, github, live }) => (
            <article key={id} className="porto-item">
              <div className="porto-img">
                <img src={image} alt={title} />
              </div>
              <div className="porto-body">
              <h3>{title}</h3>
              </div>
              <div className="porto-cta">
                <a
                  href={live}
                  className="btn btn-primary"
                  target="_blank"
                  style={{ width: "100%", textAlign: "center"}}
                >
                  Preview Website
                </a>
              </div>
            </article>
        ))}
      </div>
    </section>
  );
}

export default portofolio;
