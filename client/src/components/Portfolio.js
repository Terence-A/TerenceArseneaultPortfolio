import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import byteSizeBlog from "./byteSizeBlog.png";
import "./Portfolio.css";
import atlanticGlamping from "./atlanticGlamping.jpeg";
import whatsForDinner from "./whatsForDinner.png";
import weatherDashboard from "./weatherDashboard.png";
import workDayScheduler from "./workDayScheduler.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="carouselWrapper">
        <h2>My Work</h2>
        <Carousel className="mainCarousel" showThumbs={false}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Terence-A/ByteSizeBlog"
          >
            <div>
              <h3>- Byte Size Code -</h3>
              <img src={byteSizeBlog} alt="" className="imgOne image" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://byte-size-blog-29657a568883.herokuapp.com/"
              >
                <p className="legend">Deploy Byte Size Blog</p>
              </a>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Terence-A/Atlantic-Glamping"
          >
            <div>
              <h3>- Atlantic Glamping -</h3>
              <img src={atlanticGlamping} alt="" className="imgTwo image" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://atlantic-glamping-6972d1dfb7e3.herokuapp.com/"
              >
                <p className="legend">Deploy Atlantic Glamping</p>
              </a>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Terence-A/WhatsForDinner"
          >
            <div>
              <h3>- What's for Dinner -</h3>
              <img
                src={whatsForDinner}
                alt="clear"
                className="imgThree image"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://terence-a.github.io/WhatsForDinner/"
              >
                <p className="legend"> Deploy Whats for Dinner </p>
              </a>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Terence-A/WeatherDashboard"
          >
            <div>
              <h3>- Weather Dashboard -</h3>
              <img
                src={weatherDashboard}
                alt="clear"
                className="imgThree image"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://terence-a.github.io/WeatherDashboard/"
              >
                <p className="legend"> Deploy Weather Dashboard</p>
              </a>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Terence-A/workDayScheduler"
          >
            <div>
              <h3>- Work Day Scheduler -</h3>
              <img
                src={workDayScheduler}
                alt="clear"
                className="imgThree image"
              />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://terence-a.github.io/workDayScheduler/"
              >
                <p className="legend">Work Day Scheduler</p>
              </a>
            </div>
          </a>
        </Carousel>
      </div>
    );
  }
}

export default Portfolio;
