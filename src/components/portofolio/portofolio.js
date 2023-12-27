import React, { useState } from "react";
import "./portofolio.css";
import Data from "../Data/data";

const PAGE_SIZE = 4;

function Portofolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const totalPages = Math.ceil(Data.length / PAGE_SIZE);

  const handleClick = (page) => {
    setCurrentPage(page);
    setSelectedProject(null);
  };

  const handleProjectClick = (id) => {
    setSelectedProject(selectedProject === id ? null : id);
  };

  const renderData = () => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const dataPorto = Data.slice(start, end);

    return dataPorto.map(({ id, image, title, description, live }) => (
      <article
        key={id}
        className={`porto-item ${selectedProject === id ? "active" : ""}`}
      >
        <div className="porto-img">
          <img src={image} alt={title} />
        </div>
        <div className="porto-body">
          <h3>{title}</h3>
          <div className="porto-description">
            {selectedProject === id && (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
          {/* {selectedProject === id &&
          <div className="porto-cta">
            <a href={live}>Preview Website</a>
          </div>
          } */}
          <button
            className="btn btn-primary"
            style={{ width: "100%", textAlign: "center" }}
            onClick={() => handleProjectClick(id)}
          >
            {selectedProject === id ? "Hide Description" : "Show Description"}
          </button>
        </div>
      </article>
    ));
  };

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      const isActive = currentPage === i;
      pages.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={isActive ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container porto-container">{renderData()}</div>
      <div className="container pagination-top">{renderPagination()}</div>
    </section>
  );
}

export default Portofolio;
