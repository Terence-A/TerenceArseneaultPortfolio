import { Link } from "react-router-dom";
import "./Navigation.css";
import aboutIcon from "./about-48.png";
import porfolioIcon from "./worker-48.png";
import contactIcon from "./contact-48.png";
import resumeIcon from "./resume-48.png";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav className="mainNav">
      <ul>
        <div className="links">
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to="/">
              <div className="navCard">
                <img src={aboutIcon} alt="" />
                <p>About Me</p>
              </div>
            </Link>
          </li>
          <li className={splitLocation[1] === "portfolio" ? "active" : ""}>
            <Link to="/portfolio">
              <div className="navCard">
                <img src={porfolioIcon} alt="" />
                <p>My Work</p>
              </div>
            </Link>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link to="/contact">
              <div className="navCard">
                <img src={contactIcon} alt="" />
                <p>Contact</p>
              </div>
            </Link>
          </li>
          <li className={splitLocation[1] === "resume" ? "active" : ""}>
            <Link to="/resume">
              <div className="navCard">
                <img src={resumeIcon} alt="" />
                <p>Resume</p>
              </div>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
