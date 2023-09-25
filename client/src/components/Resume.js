import "./Resume.css";
import htmlIcon from "./frontEnd-backEnd-icons/html-icon.svg";
import cssIcon from "./frontEnd-backEnd-icons/css-icon.svg";
import javascriptIcon from "./frontEnd-backEnd-icons/javascript-icon.svg";
import reactIcon from "./frontEnd-backEnd-icons/react-js-icon.svg";
import responsiveIcon from "./frontEnd-backEnd-icons/responsive.png";
import bootstrapIcon from "./frontEnd-backEnd-icons/bootstrap-5-logo-icon.svg";
import jQueryIcon from "./frontEnd-backEnd-icons/jquery-icon.svg";
import apiIcon from "./frontEnd-backEnd-icons/api-icon.png";
import nodeIcon from "./frontEnd-backEnd-icons/node-js-icon.svg";
import expressIcon from "./frontEnd-backEnd-icons/express-icon.png";
import mysqlIcon from "./frontEnd-backEnd-icons/mysql-icon.svg";
import mongoDBIcon from "./frontEnd-backEnd-icons/mongodb-icon.svg";
import restApiIcon from "./frontEnd-backEnd-icons/restApi-icon.png";
import graphQlIcon from "./frontEnd-backEnd-icons/graphql-icon.svg";

const Resume = () => {
  return (
    <div className="resumeWrapper">
      <h2>Resume</h2>
      <p>
        Download my{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/11kIOZH-mrXH6I9gdByKGkN_zhEiFyac0tEJKgq07Q4g/edit?usp=sharing"
        >
          Resume
        </a>
      </p>
      <div className="frontEnd">
        <h3>Front-end Proficiencies</h3>
        <ul className="frontEndList">
          <li className="sm-card">
            <img src={htmlIcon} alt="" />
            <p>HTML</p>
          </li>
          <li className="sm-card">
            <img src={cssIcon} alt="" />
            <p>CSS</p>
          </li>
          <li className="sm-card">
            <img src={javascriptIcon} alt="" />
            <p>JavaScript</p>
          </li>
          <li className="sm-card">
            <img src={reactIcon} alt="" />
            <p>React</p>
          </li>
          <li className="sm-card">
            <img src={responsiveIcon} alt="" />
            <p>Responsive</p>
            <p>Design</p>
          </li>
          <li className="sm-card">
            <img src={bootstrapIcon} alt="" />
            <p>Bootstrap</p>
          </li>
          <li className="sm-card">
            <img src={jQueryIcon} alt="" />
            <p>jQuery</p>
          </li>
        </ul>
      </div>
      <div className="backEnd">
        <h3>Back-end Prficiencies</h3>
        <ul className="backEndList">
          <li className="sm-card">
            <img src={apiIcon} alt="" />
            <p>API's</p>
          </li>
          <li className="sm-card">
            <img src={nodeIcon} alt="" />
            <p>Node</p>
          </li>
          <li className="sm-card">
            <img src={expressIcon} alt="" />
            {/* <a target="_blank" href="https://icons8.com/icon/9Gfx4Dfxl0JK/express-js">Express Js</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
            <p>Express</p>
          </li>
          <li className="sm-card">
            <img src={mysqlIcon} alt="" />
            <p>MySQL,</p>
            <p> Sequelize</p>
          </li>
          <li className="sm-card">
            <img src={mongoDBIcon} alt="" />
            <p>MongoDB,</p>
            <p>Mongoose</p>
          </li>
          <li className="sm-card">
            <img src={restApiIcon} alt="" />
            <p>REST</p>
          </li>
          <li className="sm-card">
            <img src={graphQlIcon} alt="" />
            <p>GraphQL</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
