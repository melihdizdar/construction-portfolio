import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./AboutCarousel.css";

export default class MainCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
        showIndicators={true}
        emulateTouch
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} className="leftarrow">
                  <i class="fas fa-angle-left"></i>
              </button>
          )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
              <button type="button" onClick={onClickHandler} title={label} className="rightarrow">
                  <i class="fas fa-angle-right"></i>
              </button>
          )
      }>
        <div>
          <img src="https://images.pexels.com/photos/236698/pexels-photo-236698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_1"/>
          <div className="myCarousel">
            <div className="myCarouselStage">
                <div className="header">We are Constraction Company Group</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus.</div>
                <button><i class="far fa-envelope"></i> REQUEST A QUOTE</button>
            </div>
          </div>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_2" />
          <div className="myCarousel">
            <div className="myCarouselStage">
                <div className="header">We are Constraction Company Group</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus.</div>
                <button><i class="far fa-envelope"></i> REQUEST A QUOTE</button>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}