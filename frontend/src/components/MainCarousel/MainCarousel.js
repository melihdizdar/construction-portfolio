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
      }>
        <div>
          <img src="https://images.pexels.com/photos/374018/pexels-photo-374018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_1"/>
          <div className="myCarousel">
            <h3>YÜKSEK KALİTE GARANTİLİ</h3>
            <div className="lineStage">
              <div className="line"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare nibh non mauris tempor facilisis.</p>
            <div className="carouselCardStage">
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Yapı</div>
                  <div className="bottomText">Proje Koleksiyonu</div>
                </div>
                <div className="right">
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Yenileme</div>
                  <div className="bottomText">Hizmet Tanımlama</div>
                </div>
                <div className="right">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Mühendislik</div>
                  <div className="bottomText">Mimari</div>
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
            <h3>HER TÜRLÜ İNŞAATIN SAĞLANMASI</h3>
            <div className="lineStage">
              <div className="line"/>
            </div>
            <p>Suspendisse lacus metus, consequat at massa eu, dignissim imperdiet velit. Vivamus ac viverra ligula, tristique suscipit orci. </p>
            <div className="carouselCardStage">
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Yapı</div>
                  <div className="bottomText">Proje Koleksiyonu</div>
                </div>
                <div className="right">
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Yenileme</div>
                  <div className="bottomText">Hizmet Tanımlama</div>
                </div>
                <div className="right">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Mühendislik</div>
                  <div className="bottomText">Mimari</div>
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
            <h3>İSTEKLERİNİZİ BAŞARIYLA İNŞA EDİYORUZ</h3>
            <div className="lineStage">
              <div className="line"/>
            </div>
            <p>Cras cursus libero feugiat dui luctus pellentesque.</p>
            <div className="carouselCardStage">
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Yapı</div>
                  <div className="bottomText">Proje Koleksiyonu</div>
                </div>
                <div className="right">
                  <i class="fas fa-building"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Yenileme</div>
                  <div className="bottomText">Hizmet Tanımlama</div>
                </div>
                <div className="right">
                  <i class="fas fa-tools"></i>
                </div>
              </div>
              <div className="carouselCard">
                <div className="left">
                  <div className="topText">Mühendislik</div>
                  <div className="bottomText">Mimari</div>
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