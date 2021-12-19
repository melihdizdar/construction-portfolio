import React from 'react'
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerTop">
                <div className="content">
                    <div className="footerCard">
                        <div className="left"><i class="fas fa-map-marker-alt"></i></div>
                        <div className="right">
                            <div className="top">Visit Our Company at</div>
                            <div className="bottom">4578 Marmora Road, Glasgow</div>
                        </div>
                    </div>
                    <div className="footerCard">
                        <div className="left"><i class="fas fa-mobile-alt"></i></div>
                        <div className="right">
                            <div className="top">Have a Questions? Call us</div>
                            <div className="bottom">+7-495-1234567</div>
                        </div>
                    </div>
                    <div className="footerCard">
                        <div className="left"><i class="far fa-clock"></i></div>
                        <div className="right">
                            <div className="top">Working Time</div>
                            <div className="bottom">Mon–Sat: 08:00–18:00</div>
                        </div>
                    </div>
                    <div className="footerCard">
                        <div className="left"><i class="far fa-envelope"></i></div>
                        <div className="right">
                            <div className="top">Contact with Us</div>
                            <div className="bottom"><a href="mailto:info@demolink.org">info@demolink.org</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="content">
                    <div className="left">Copyright © 2021 All rights reserved.</div>
                    <div className="right">
                        <Link to="/"><img src={logo} className="logo" alt="logo"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
