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
                            <div className="top">Şirketimizi ziyaret edin</div>
                            <div className="bottom">34160 Marmara Caddesi, Turkey</div>
                        </div>
                    </div>
                    <div className="footerCard">
                        <div className="left"><i class="fas fa-mobile-alt"></i></div>
                        <div className="right">
                            <div className="top">Sorunuz mu var? Bizi arayın!</div>
                            <div className="bottom">+90-123-4567890</div>
                        </div>
                    </div>
                    <div className="footerCard">
                        <div className="left"><i class="far fa-clock"></i></div>
                        <div className="right">
                            <div className="top">Çalışma Saatleri</div>
                            <div className="bottom">Pzt–Cmt: 08:00–18:00</div>
                        </div>
                    </div>
                    <div className="footerCard">
                        <div className="left"><i class="far fa-envelope"></i></div>
                        <div className="right">
                            <div className="top">Bizimle iletişime geç</div>
                            <div className="bottom"><a href="mailto:info@company.com">info@company.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="content">
                    <div className="left">Copyright © 2021 Bütün hakları saklıdır.</div>
                    <div className="right">
                        <Link to="/"><img src={logo} className="logo" alt="logo"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
