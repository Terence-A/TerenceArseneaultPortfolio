import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photo from "./photo.png";
import byteSizeBlog from "./byteSizeBlog.png";
import "./Portfolio.css";
import atlanticGlamping from "./atlanticGlamping.jpeg";

class Portfolio extends Component {
  render() {
    return (
      <div className="carouselWrapper">
        <h2>My Work</h2>
        <Carousel className="mainCarousel">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Terence-A/ByteSizeBlog"
          >
            <div>
              <h3>- Byte Size Code -</h3>
              <img src={byteSizeBlog} alt="" className="imgOne image" />
              <p className="legend">Byte Size Code</p>
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
              <p className="legend">Legend 2</p>
            </div>
          </a>
          <div>
            <img src={photo} alt="clear" className="imgThree image" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src={photo} alt="clear" className="imgThree image" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Portfolio;
