import React from "react";
import data from "./data";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div data-aos="zoom-in-up">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {data
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .map(
              ({
                id,
                image,
                title,
                description,
                technologies,
                githubLink,
                demoLink,
              }) => {
                return (
                  <article className="portfolio__item">
                    <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        GitHub
                      </a>
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    </div>
                  </article>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
