import linkedIn from "./linkedin-24.png";
import gitHub from "./github-24.png";
import stackOverflow from "./stackoverflow-24.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={linkedIn} alt="LinkedIn logo" />
      <img src={gitHub} alt="Github logo" />
      <img src={stackOverflow} alt="stackoverflow logo" />
    </footer>
  );
};

export default Footer;
