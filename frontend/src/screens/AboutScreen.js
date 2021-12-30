import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/about/about.css";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel"
import AboutTestimonials from '../components/AboutTestimonials/AboutTestimonials';

export default function AboutScreen() {
    return (
        <div className="about">
            <div className="headerStage">
                <div className="content">
                    <div className="left">HAKKIMIZDA</div>
                    <div className="right">
                        <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="secondLink">HAKKIMIZDA</div>
                    </div>
                </div>
            </div>
            <div className="aboutCarousel">
                <AboutCarousel/>
            </div>
            <div className="prefaceStage">
                <div className="content">
                    <div className="left">
                        <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="about_img" />
                    </div>
                    <div className="right">
                        <div className="mainHeader">BİZ KİMİZ?</div>
                        <div className="line"/>
                        <div className="subHeader">Eşsiz Bir Deneyim</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                    </div>
                </div>
            </div>
            <div className="someFactsStage">
                <div className="content">
                    <div className="top">
                        <div className="mainHeader">BAZI GERÇEKLER</div>
                        <div className="line"/>
                        <div className="subHeader">Kaliteli markalar ve deneyimli kadrosu ile en iyi hizmet.</div>
                    </div>
                    <div className="bottom">
                        <div className="content">
                            <div className="someFactsCard">
                                <img src="https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_1"/>
                                <div className="header">TARİHİMİZ</div>
                                <div className="line"/>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                            </div>
                            <div className="someFactsCard">
                                <img src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_2"/>
                                <div className="header">MODERN TEKNOLOJİLER</div>
                                <div className="line"/>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                            </div>
                            <div className="someFactsCard">
                                <img src="https://images.pexels.com/photos/3680959/pexels-photo-3680959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_3"/>
                                <div className="header">PROFESYONEL EKİP ÇALIŞMASI</div>
                                <div className="line"/>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourResultsStage">
                <div className="left">
                    <div className="mainHeader">SONUÇLARIMIZ</div>
                    <div className="line"/>
                    <div className="subHeader">İnşaat alanında lider firma</div>
                </div>
                <div className="right">
                    <div className="ourResultsCard">
                        <div className="svg"><i class="fas fa-home"></i></div>
                        <div className="value">345</div>
                        <div className="name">PROJELER</div>
                    </div>
                    <div className="ourResultsCard">
                        <div className="svg"><i class="fas fa-users"></i></div>
                        <div className="value">2478</div>
                        <div className="name">MEMNUN MÜŞTERİLER</div>
                    </div>
                    <div className="ourResultsCard">
                        <div className="svg"><i class="fas fa-city"></i></div>
                        <div className="value">413</div>
                        <div className="name">KALİFİYE MALZEME</div>
                    </div>
                </div>
            </div>
            <div className="workingWithUsStage">
                <div className="content">
                    <div className="mainHeader">BİZİMLE ÇALIŞMAK İSTERMİSİNİZ?</div>
                    <div className="line"/>
                    <div className="subHeader">Ağımıza katılabilirsiniz.</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam.</div>
                    <div className="buttonStage">
                        <Link to="/contact"><button><i class="far fa-envelope"></i> TEKLİF GÖNDER</button></Link>
                    </div>
                </div>
            </div>
            <div className="ourTeamStage">
                <div className="content">
                    <div className="top">
                        <div className="mainHeader">KADROMUZ</div>
                        <div className="line"/>
                        <div className="subHeader">Yetenekli kadromuzla yanınızdayız.</div>
                    </div>
                    <div className="bottom">
                        <div className="content">
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_1"/>
                                <div className="header">AD SOYAD</div>
                                <div className="line"/>
                                <div className="title">Kurucu</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_2"/>
                                <div className="header">AD SOYAD</div>
                                <div className="line"/>
                                <div className="title">Kıdemli Mühendis</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_3"/>
                                <div className="header">AD SOYAD</div>
                                <div className="line"/>
                                <div className="title">Genç Mühendis</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_3"/>
                                <div className="header">AD SOYAD</div>
                                <div className="line"/>
                                <div className="title">Proje Müdürü</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonialsHeaderStage">
                <div className="mainHeader">KADROMUZUN YORUMLARI</div>
                <div className="line"/>
            </div>
            <div className="aboutTestimonials">
                <AboutTestimonials/>
            </div>
        </div>
    )
}