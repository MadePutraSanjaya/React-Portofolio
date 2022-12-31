import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/porto1.png";
import IMG2 from "../../assets/porto2.png";
import IMG3 from "../../assets/porto3.png";
import IMG4 from "../../assets/porto4.png";
import IMG5 from "../../assets/porto5.png";

function portofolio() {
  const Data = [
    {
      id: 1,
      image: IMG1,
      title: "Slukat Learning Center Website",
      alt: "Slukat Learning Center Website",
      live: "https://slukatbali.or.id",
    },
    {
      id: 2,
      image: IMG2,
      title: "Quality Care Rental Bali Website",
      alt: "Quality Care Rental Bali Website",
      live: "https://qucarentalbali.com",
    },
    {
      id: 3,
      image: IMG3,
      title: "Kampung Kode Website ",
      alt: "Kampung Kode Website",
      live: "https://kampungkode.org",
    },
    {
      id: 4,
      image: IMG4,
      title: "Peak Season Website",
      alt: "Peak Season Website",
      live: "https://peakseason.id",
    },
    {
      id: 5,
      image: IMG5,
      title: "E Club Ubud Website",
      alt: "E Club Ubud Website",
      live: "https://eclububud.com",
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
