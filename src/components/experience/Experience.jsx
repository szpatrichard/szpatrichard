import React from "react";
import technologies from "./technologies";

const Experience = () => {
  return (
    <section id="experience">
      <div data-aos="zoom-in-up">
        <h5>Skills I Have</h5>
        <h2>Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              {technologies
                .filter(({ type }) => type == "Frontend")
                .map((skill) => {
                  return (
                    <article className="experience__details">
                      <skill.icon className="experience__details-icon" />
                      <div>
                        <h4>{skill.title}</h4>
                        <small className="text-light">{skill.level}</small>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>

          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              {technologies
                .filter(({ type }) => type == "Backend")
                .map((skill) => {
                  return (
                    <article className="experience__details">
                      <skill.icon className="experience__details-icon" />
                      <div>
                        <h4>{skill.title}</h4>
                        <small className="text-light">{skill.level}</small>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
