import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="mainNav">
      <ul>
        <Link to="/">About Me</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resume">Resume</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
