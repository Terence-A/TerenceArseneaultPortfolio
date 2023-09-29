// import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Portfolio.css";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
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
            <a target="_blank" rel="noopener noreferrer" href={list.deployLink}>
              <p className="legend">{list.deployTitle}</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
