import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./AboutTestimonials.css";

export default function ServicesTestimonials() {
    return (
            <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={2000}
            showIndicators={true}
            emulateTouch>
            <div>
                <img src="https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_1"/>
                <div className="myCarousel">
                    <h3>AD SOYAD</h3>
                    <h4>Kurucu</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.</p>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_2"/>
                <div className="myCarousel">
                    <h3>AD SOYAD</h3>
                    <h4>Kıdemli Mühendis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam.</p>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_3"/>
                <div className="myCarousel">
                    <h3>AD SOYAD</h3>
                    <h4>Genç Mühendis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur.</p>
                </div>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_4"/>
                <div className="myCarousel">
                    <h3>AD SOYAD</h3>
                    <h4>Proje Müdürü</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
                </div>
            </div>
        </Carousel>
    )
}