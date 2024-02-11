import React from "react";
import {
  faLinkedin as LinkedinIcon,
  faGithubSquare as GithubIcon,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Richard Szilagyi
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/patrikrichard" target="_blank">
          <FontAwesomeIcon icon={LinkedinIcon} />
        </a>
        <a href="https://github.com/szpatrichard" target="_blank">
          <FontAwesomeIcon icon={GithubIcon} />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; richardsz.dev. All rights reserved {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
