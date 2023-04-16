import {React, useState} from "react";
import "./portofolio.css";
import Data from "../Data/data";
const PAGE_SIZE = 6;

function Portofolio() {


   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = Math.ceil(Data.length / PAGE_SIZE);

   const handleClick = (page) => {
     setCurrentPage(page);
   };
  

  const renderData = () => {
    
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const dataPorto = Data.slice(start, end);

    return dataPorto.map(({ id, image, title, github, live }) => (
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
            style={{ width: "100%", textAlign: "center" }}
          >
            Preview Website
          </a>
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

      <div className="container porto-container">
        {renderData()}
       
      </div>
        <div className="container pagination-top">{renderPagination()}</div>
    </section>
  );
}

export default Portofolio;
