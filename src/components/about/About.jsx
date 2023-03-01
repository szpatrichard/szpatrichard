import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy as ExperienceIcon,
  faUsers as ClientIcon,
  faFolderTree as ProjectIcon,
} from "@fortawesome/free-solid-svg-icons";
import Me from "../../assets/images/me-about.svg";

const About = () => {
  return (
    <section id="about">
      <div data-aos="zoom-in-up">
        <h5>Get To Know More</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="About image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <div className="about__icon">
                  <FontAwesomeIcon icon={ExperienceIcon} />
                </div>
                <h5>Experience</h5>
                <small>4+ Years</small>
              </article>

              <article className="about__card">
                <div className="about__icon">
                  <FontAwesomeIcon icon={ClientIcon} />
                </div>
                <h5>Clients</h5>
                <small>60+ Worldwide</small>
              </article>

              <article className="about__card">
                <div className="about__icon">
                  <FontAwesomeIcon icon={ProjectIcon} />
                </div>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>
              Enthusiastic and engaged in the field of computer science and technology.
            </p>

            <p>
              I started out 10 years ago by coding simple dynamic web pages. Since then I have explored multiple other aspects of programming, such as designing and creating apps for web and mobile platforms, building full-stack software, and embedded systems programming.
            </p>
              
            <p>
              In 2020, in the midst of a pandemic, I started my freelancer journey. While working closely with my clients all over the globe, I gained hands-on experience and improved my technical, teamwork and communication skills. I strive to deliver my services in a professional manner, reliably, and well on schedule to my clients.
            </p>
              
            <p>
              During the same year, I entered university to study and obtain a degree in software development. As of the present, I have achieved excellent results in my academic progress and I'm entering year 3 of my studies.
            </p>

            <p>
              In the future, I'm aspired to learn more about blockchain technologies and artificial intelligence. Following my studies, I wish to start off my career as a developer and eventually get a master's degree.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
