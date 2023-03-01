import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse as HomeIcon,
  faUser as AboutIcon,
  faStar as ExperienceIcon,
  faBriefcase as PortfolioIcon,
  faPaperPlane as ContactIcon,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav data-aos="fade-up">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FontAwesomeIcon icon={HomeIcon} />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FontAwesomeIcon icon={AboutIcon} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FontAwesomeIcon icon={ExperienceIcon} />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FontAwesomeIcon icon={PortfolioIcon} />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FontAwesomeIcon icon={ContactIcon} />
      </a>
    </nav>
  );
};

export default Nav;
