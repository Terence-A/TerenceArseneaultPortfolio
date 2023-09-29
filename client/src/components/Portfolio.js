import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import byteSizeBlog from "./byteSizeBlog.png";
import "./Portfolio.css";
import atlanticGlamping from "./atlanticGlamping.jpeg";
import whatsForDinner from "./whatsForDinner.png";
import weatherDashboard from "./weatherDashboard.png";
import workDayScheduler from "./workDayScheduler.png";
import codingQuiz from "./codingQuiz.png";

const PortfolioList = [
  {
    portLink: "https://github.com/Terence-A/ByteSizeBlog",
    portTitle: "Byte Size Code Repo",
    image: byteSizeBlog,
    deployLink: "https://byte-size-blog-29657a568883.herokuapp.com/",
    deployTitle: "Deploy Byte Size Blog",
    id: 1,
  },
  {
    portLink: "https://github.com/Terence-A/Atlantic-Glamping",
    portTitle: "Atlantic Glamping Repo",
    image: atlanticGlamping,
    deployLink: "https://atlantic-glamping-6972d1dfb7e3.herokuapp.com/",
    deployTitle: "Deploy Atlantic Glamping",
    id: 2,
  },
  {
    portLink: "https://github.com/Terence-A/WhatsForDinner",
    portTitle: "What's for Dinner Repo",
    image: whatsForDinner,
    deployLink: "https://terence-a.github.io/WhatsForDinner/",
    deployTitle: "Deploy Whats for Dinner",
    id: 3,
  },
  {
    portLink: "https://github.com/Terence-A/WeatherDashboard",
    portTitle: "Weather Dashboard Repo",
    image: weatherDashboard,
    deployLink: "https://terence-a.github.io/WeatherDashboard/",
    deployTitle: "Deploy Weather Dashboard",
    id: 4,
  },
  {
    portLink: "https://github.com/Terence-A/workDayScheduler",
    portTitle: "Work Day Scheduler Repo",
    image: workDayScheduler,
    deployLink: "https://terence-a.github.io/workDayScheduler/",
    deployTitle: "Deploy Work Day Scheduler",
    id: 5,
  },
  {
    portLink: "https://github.com/Terence-A/codingQuizChallenge",
    portTitle: "Coding Quiz Challenge Repo",
    image: codingQuiz,
    deployLink: "https://terence-a.github.io/codingQuizChallenge/",
    deployTitle: "Deploy Coding Quiz Challenge",
    id: 6,
  },
];

console.log(PortfolioList[0].portLink);

class Portfolio extends Component {
  render() {
    return (
      <div className="carouselWrapper">
        <h2>My Work</h2>
        <Carousel className="mainCarousel" showThumbs={false}>
          {PortfolioList.map((list) => (
            <div key={list.id}>
              <a target="_blank" rel="noopener noreferrer" href={list.portLink}>
                <button>{list.portTitle}</button>
                <img src={list.image} alt="" className="imgOne image" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={list.deployLink}
              >
                <p className="legend">{list.deployTitle}</p>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Portfolio;
