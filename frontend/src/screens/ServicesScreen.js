import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/services/services.css";
import ServicesCard from '../components/ServicesCards/ServicesCards';
import ServicesTestimonials from '../components/ServicesTestimonials/ServicesTestimonials';
import servicesData from '../data/servicesData';

export default function ServicesScreen() {
    return (
        <div className="services">
            <div className="headerStage">
                <div className="content">
                    <div className="left">SERVİSLER</div>
                    <div className="right">
                        <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="secondLink">SERVİSLER</div>
                    </div>
                </div>
            </div>
            <div className="prefaceStage">
                <div className="firstHeader">ÖZEL HİZMET</div>
                <div className="line"/>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus vel urna at euismod. Morbi eleifend lectus a sodales gravida. Morbi tincidunt iaculis libero, non scelerisque neque euismod eu. Pellentesque luctus est a odio ultricies pellentesque.</div>
            </div>
            <div className="ServicesCardStage">
                {servicesData.map((servicesCard) => (
                    <ServicesCard key={servicesCard._id} servicesCard={servicesCard}></ServicesCard>
                ))}
            </div>
            <div className="testimonialsHeaderStage">
                <div className="firstHeader">SİZİN YORUMLARINIZ</div>
                <div className="line"/>
            </div>
            <div className="servicesTestimonials">
                <ServicesTestimonials/>
            </div>
        </div>
    )
}