import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/About/about.css";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel"

export default function AboutScreen() {
    return (
        <div className="about">
            <div className="headerStage">
                <div className="content">
                    <div className="left">ABOUT</div>
                    <div className="right">
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li>/</li>
                            <li>ABOUT</li>
                        </ul>
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
                        <div className="mainHeader">WHO WE ARE</div>
                        <div className="line"/>
                        <div className="subHeader">A Unique Experience</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                    </div>
                </div>
            </div>
            <div className="someFactsStage">
                <div className="content">
                    <div className="top">
                        <div className="mainHeader">SOME FACTS</div>
                        <div className="line"/>
                        <div className="subHeader">Service with quality brands and experienced staff.</div>
                    </div>
                    <div className="bottom">
                        <div className="content">
                            <div className="someFactsCard">
                                <img src="https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_1"/>
                                <div className="header">OUR HISTORY</div>
                                <div className="line"/>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                            </div>
                            <div className="someFactsCard">
                                <img src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_2"/>
                                <div className="header">MODERN TECHNOLOGIES</div>
                                <div className="line"/>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                            </div>
                            <div className="someFactsCard">
                                <img src="https://images.pexels.com/photos/3680959/pexels-photo-3680959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_3"/>
                                <div className="header">PROFESSIONAL TEAMWORK</div>
                                <div className="line"/>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum. Proin non iaculis erat. Curabitur tincidunt sapien urna, eu scelerisque lectus facilisis id. Mauris hendrerit tellus a tempus fermentum. Suspendisse eget tellus malesuada, laoreet tellus ut, elementum magna.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourResultsStage">
                <div className="left">
                    <div className="mainHeader">OUR RESULTS</div>
                    <div className="line"/>
                    <div className="subHeader">A leading company in the field of construction</div>
                </div>
                <div className="right">
                    <div className="ourResultsCard">
                        <div className="svg"><i class="fas fa-home"></i></div>
                        <div className="value">345</div>
                        <div className="name">PROJECTS</div>
                    </div>
                    <div className="ourResultsCard">
                        <div className="svg"><i class="fas fa-users"></i></div>
                        <div className="value">2478</div>
                        <div className="name">HAPPY CLIENTS</div>
                    </div>
                    <div className="ourResultsCard">
                        <div className="svg"><i class="fas fa-city"></i></div>
                        <div className="value">413</div>
                        <div className="name">QUALIFIED STAFF</div>
                    </div>
                </div>
            </div>
            <div className="workingWithUsStage">
                <div className="content">
                    <div className="mainHeader">WORKING WITH US</div>
                    <div className="line"/>
                    <div className="subHeader">You can join our network.</div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam.</div>
                    <button><i class="far fa-envelope"></i> REQUEST A QUOTE</button>
                </div>
            </div>
            <div className="ourTeamStage">
                <div className="content">
                    <div className="top">
                        <div className="mainHeader">OUR TEAM</div>
                        <div className="line"/>
                        <div className="subHeader">We are with you with our talented staff.</div>
                    </div>
                    <div className="bottom">
                        <div className="content">
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/3776969/pexels-photo-3776969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_1"/>
                                <div className="header">NAME SURNAME</div>
                                <div className="line"/>
                                <div className="title">Co-Founder</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/3831164/pexels-photo-3831164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_2"/>
                                <div className="header">NAME SURNAME</div>
                                <div className="line"/>
                                <div className="title">Senior Engineer</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_3"/>
                                <div className="header">NAME SURNAME</div>
                                <div className="line"/>
                                <div className="title">Junior Engineer</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                            <div className="ourTeamCard">
                                <img src="https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="someFacts_3"/>
                                <div className="header">NAME SURNAME</div>
                                <div className="line"/>
                                <div className="title">Project Manager</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo sodales diam quis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec consectetur, arcu vel convallis aliquam, dui odio commodo est, et luctus dui mi a purus. Nam ac turpis et metus tincidunt dictum ac eu magna. Nulla ultrices posuere interdum.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
