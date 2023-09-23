import Navigation from "./Navigation";
import "./Header.css";
import photo from "./photo2.jpg";

const Header = () => {
  return (
    <header className="headerNav">
      <img className="self-photo" src={photo} alt="self portrait" />
      <Navigation />
      <p> &copy; Terence Arseneault</p>
    </header>
  );
};

export default Header;
