import linkedIn from "./linkedin-24.png";
import gitHub from "./github-24.png";
import stackOverflow from "./stackoverflow-24.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/terence-arseneault-90489b265/"
      >
        <img src={linkedIn} alt="LinkedIn logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Terence-A"
      >
        <img src={gitHub} alt="Github logo" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://stackoverflow.com/users/11772969/terence"
      >
        <img src={stackOverflow} alt="stackoverflow logo" />
      </a>
    </footer>
  );
};

export default Footer;
