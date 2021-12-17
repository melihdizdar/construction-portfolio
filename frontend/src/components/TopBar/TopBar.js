import React from 'react'
import "./topbar.css";
import logo from "../../assets/logo.png";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="brandStage">
                    <div className="topText">Brand</div>
                    <div className="bottomText">CONSTRUCTION COMPANY</div>
                </div>
            </div>
            <div className="right">
                <div className="info">
                    <div className="left">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div className="right">
                        <div className="header">CUSTOM SUPPORT & SALE</div>
                        <div className="subHeader">+7-495-1234567</div>
                    </div>
                </div>
                <div className="info">
                    <div className="left">
                        <i class="far fa-clock"></i>
                    </div>
                    <div className="right">
                        <div className="header">WORKING TIME</div>
                        <div className="subHeader">MON–SAT: 08:00–18:00</div>
                    </div>
                </div>
                <div className="buttonStage">
                    <button><i class="far fa-envelope"></i> REQUEST A QUOTE</button>
                </div>
            </div>
        </div>
    )
}
