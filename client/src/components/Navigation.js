import { Link } from "react-router-dom";
import "./Navigation.css";
import aboutIcon from "./about-48.png";
import porfolioIcon from "./worker-48.png";
import contactIcon from "./contact-48.png";
import resumeIcon from "./resume-48.png";

const Navigation = () => {
  return (
    <nav className="mainNav">
      <div className="links">
        <Link to="/">
          <div className="navCard">
            <img src={aboutIcon} alt="" />
            About Me
          </div>
        </Link>
        <Link to="/portfolio">
          <div className="navCard">
            <img src={porfolioIcon} alt="" />
            My Work
          </div>
        </Link>
        <Link to="/contact">
          <div className="navCard">
            <img src={contactIcon} alt="" />
            Contact
          </div>
        </Link>
        <Link to="/resume">
          <div className="navCard">
            <img src={resumeIcon} alt="" />
            Resume
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
