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

class Portfolio extends Component {
  render() {
    return (
      <div className="carouselWrapper">
        <h2>My Work</h2>
        <Carousel className="mainCarousel" showThumbs={false}>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Terence-A/ByteSizeBlog"
            >
              <h3>- Byte Size Code Repo -</h3>
              <img src={byteSizeBlog} alt="" className="imgOne image" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://byte-size-blog-29657a568883.herokuapp.com/"
            >
              <p className="legend">Deploy Byte Size Blog</p>
            </a>
          </div>

          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Terence-A/Atlantic-Glamping"
            >
              <h3>- Atlantic Glamping Repo-</h3>
              <img src={atlanticGlamping} alt="" className="imgTwo image" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://atlantic-glamping-6972d1dfb7e3.herokuapp.com/"
            >
              <p className="legend">Deploy Atlantic Glamping</p>
            </a>
          </div>

          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Terence-A/WhatsForDinner"
            >
              <h3>- What's for Dinner Repo -</h3>
              <img
                src={whatsForDinner}
                alt="clear"
                className="imgThree image"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://terence-a.github.io/WhatsForDinner/"
            >
              <p className="legend"> Deploy Whats for Dinner </p>
            </a>
          </div>

          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Terence-A/WeatherDashboard"
            >
              <h3>- Weather Dashboard Repo -</h3>
              <img
                src={weatherDashboard}
                alt="clear"
                className="imgThree image"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://terence-a.github.io/WeatherDashboard/"
            >
              <p className="legend"> Deploy Weather Dashboard</p>
            </a>
          </div>

          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Terence-A/workDayScheduler"
            >
              <h3>- Work Day Scheduler Repo -</h3>
              <img
                src={workDayScheduler}
                alt="clear"
                className="imgThree image"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://terence-a.github.io/workDayScheduler/"
            >
              <p className="legend">Deploy Work Day Scheduler</p>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Terence-A/codingQuizChallenge"
            >
              <h3>- Coding Quiz Challenge Repo -</h3>
              <img src={codingQuiz} alt="clear" className="imgThree image" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://terence-a.github.io/codingQuizChallenge/"
            >
              <p className="legend">Deploy Coding Quiz Challenge</p>
            </a>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Portfolio;
