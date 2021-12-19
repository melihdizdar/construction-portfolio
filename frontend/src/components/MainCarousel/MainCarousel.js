import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./MainCarousel.css";

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
        showIndicators={false}
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
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li
                    className="indicators-active"
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                />
            );
        }
        return (
            <li
                className="indicators"
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
        }}>
        <div>
          <img src="https://images.pexels.com/photos/374018/pexels-photo-374018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_1"/>
          <div className="myCarousel">
            <h3>Hight Quality Guaranteed</h3>
            <div className="lineStage">
              <div className="line"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh non mauris tempor facilisis.</p>
            <div className="carouselCardStage">
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Construction</div>
                  <div className="bottomText">Project Collection</div>
                </div>
                <div className="right">
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Renovation</div>
                  <div className="bottomText">Service Describe</div>
                </div>
                <div className="right">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Engineering</div>
                  <div className="bottomText">Architecture</div>
                </div>
                <div className="right">
                  <i class="fas fa-clipboard-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_2" />
          <div className="myCarousel">
            <h3>Providing All Kinds of Construction</h3>
            <div className="lineStage">
              <div className="line"/>
            </div>
            <p>Suspendisse lacus metus, consequat at massa eu, dignissim imperdiet velit. Vivamus ac viverra ligula, tristique suscipit orci. </p>
            <div className="carouselCardStage">
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Construction</div>
                  <div className="bottomText">Project Collection</div>
                </div>
                <div className="right">
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Renovation</div>
                  <div className="bottomText">Service Describe</div>
                </div>
                <div className="right">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Engineering</div>
                  <div className="bottomText">Architecture</div>
                </div>
                <div className="right">
                  <i class="fas fa-clipboard-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_3" />
          <div className="myCarousel">
            <h3>We Construct Your Success</h3>
            <div className="lineStage">
              <div className="line"/>
            </div>
            <p>Cras cursus libero feugiat dui luctus pellentesque.</p>
            <div className="carouselCardStage">
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Construction</div>
                  <div className="bottomText">Project Collection</div>
                </div>
                <div className="right">
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Renovation</div>
                  <div className="bottomText">Service Describe</div>
                </div>
                <div className="right">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Engineering</div>
                  <div className="bottomText">Architecture</div>
                </div>
                <div className="right">
                  <i class="fas fa-clipboard-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}