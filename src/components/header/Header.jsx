import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import Hero from "../../assets/images/hero.svg";
import Pattern from "../../assets/images/pattern.svg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, my name is</h5>
        <h1>Richard Szilagyi</h1>
        <div className="role__positions">
          <h5 className="text-light">Software engineer</h5> |
          <h5 className="text-light">Web developer</h5> |
          <h5 className="text-light">Data scientist</h5>
        </div>

        <CTA />
        <Socials />

        <div className="hero">
          <img src={Hero} />
        </div>

        <a href="#contact" className="scroll__down">
          <div className="scroll__text">Scroll</div>
          <div class="scroll__icon">
            <div class="indicator"></div>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
