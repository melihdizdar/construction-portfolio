import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AboutCarousel from "../components/AboutCarousel/AboutCarousel"
import AboutTestimonials from '../components/AboutTestimonials/AboutTestimonials';

export default function AboutScreen() {
    return (
        <AboutScreenStyled>
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
                        <button><i class="far fa-envelope"></i> TEKLİF GÖNDER</button>
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
        </AboutScreenStyled>
    )
}
const AboutScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.about{
    padding-bottom: 2.5rem;
    .headerStage{
        width: 100%;
        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Roboto', sans-serif;
            margin-top: 1%;
            .left{
                font-size: 1.3rem;
                color: #1c1c1c;
                font-weight: bold;
                margin-left: 2%;
            }
            .right{
                display: flex;
                color: #4b4b4b;
                margin-right: 2%;
                .firstLink{
                    a{
                        color: #4b4b4b;
                        text-decoration: none;
                    }
                    a:hover{
                        text-decoration: underline;
                    }
                }
                .secondLink{
                    text-decoration: underline;
                }
            }
        }
    }
    .prefaceStage{
        width: 100%;
        .content{
            display: flex;
            margin-left: 5%;
            margin-right: 5%;
            margin-bottom: 5%;
            .left{
                flex: 30%;
                justify-content: center;
                align-items: center;
                img{
                    width: 100%;
                    height: 300px;
                }
            }
            .right{
                flex: 70%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                font-family: 'Roboto', sans-serif;
                margin-left: 5%;
                .mainHeader{
                    font-size: 1.3rem;
                    margin-bottom: 1%;
                }
                .line{
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 10%;
                    border-bottom: 3px solid #ff3838;
                    margin-bottom: 2%;
                }
                .subHeader{
                    font-size: 1.3rem;
                    margin-bottom: 2%;
                }
                .text{
                    font-size: 1rem;
                }
            }
        }
    }
    .someFactsStage{
        width: 100%;
        margin-bottom: 5%;
        .content{
            font-family: 'Roboto', sans-serif;
            .top{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .mainHeader{
                    font-size: 1.3rem;
                    color: #1c1c1c;
                    margin-bottom: 1%;
                }
                .line{
                    width: 5%;
                    border-bottom: 3px solid #ff3838;
                    margin-bottom: 1%;
                }
                .subHeader{
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #ff3838;
                    margin-bottom: 1%;
                }
            }
            .bottom{
                width: 100%;
                .content{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    .someFactsCard{
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                        flex-direction: column;
                        width: 33%;
                        margin: 0%;
                        img{
                            width: 100%;
                            height: 300px;
                            margin-bottom: 2%;
                            object-fit: cover;
                        }
                        .header{
                            font-size: 1.5rem;
                            margin-bottom: 1%;
                            color: #1c1c1c;
                        }
                        .line{
                            margin-bottom: 2%;
                            border-bottom: 3px solid #ff3838;
                            width: 10%;
                        }
                        .text{
                            font-size: 0.75rem;
                            color: #4b4b4b;
                            text-align: justify;
                        }
                    }
                }
            }
        }
    }
    .ourResultsStage{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 5%;
        .left{
            flex: 50%;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            .mainHeader{
                font-size: 1.3rem;
                color: #1c1c1c;
                margin-bottom: 1%;
            }
            .line{
                border-bottom: 3px solid #ff3838;
                width: 10%;
                margin-bottom: 2%;
            }
            .subHeader{
                font-size: 1.6rem;
                font-weight: bold;
                color: #ff3838;
            }
        }
        .right{
            flex: 50%;
            display: flex;
            .ourResultsCard{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 25%;
                margin: 2%;
                .svg{
                    font-size: 2rem;
                    color: #ff3838;
                }
                .value{
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .name{
                    font-size: 0.8rem;
                }
            }
        }
    }
    .workingWithUsStage{
        width: 100%;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 5%;
        background-image: url("https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .content{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .mainHeader{
                font-size: 1.3rem;
                color: #1c1c1c;
                margin-bottom: 1%;
                margin-top: 10%;
            }
            .line{
                border-bottom: 3px solid #ff3838;
                width: 10%;
                margin-bottom: 2%;
            }
            .subHeader{
                font-size: 1.7rem;
                color: #ff3838;
                font-weight: bold;
                margin-bottom: 2%;
                text-align: center;
            }
            .text{
                font-size: 1rem;
                color: white;
                margin-bottom: 2%;
                margin-left: 15%;
                margin-right: 15%;
                text-align: center;
            }
            button{
                width: 20%;
                border: none;
                background-color: #ff3838;
                color: white;
                margin-bottom: 10%;
                height: 50px;
            }
            button:hover{
                background-color: #1c1c1c;
                color: white;
            }
        }
    }
    .ourTeamStage{
        width: 100%;
        margin-bottom: 5%;
        .content{
            font-family: 'Roboto', sans-serif;
            .top{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .mainHeader{
                    font-size: 1.3rem;
                    color: #1c1c1c;
                    margin-bottom: 1%;
                }
                .line{
                    width: 5%;
                    border-bottom: 3px solid #ff3838;
                    margin-bottom: 1%;
                }
                .subHeader{
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #ff3838;
                    margin-bottom: 1%;
                }
            }
            .bottom{
                width: 100%;
                .content{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    margin-left: 2%;
                    margin-right: 2%;
                    .ourTeamCard{
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                        flex-direction: column;
                        width: 20%;
                        margin: 1%;
                        img{
                            width: 100%;
                            height: 200px;
                            margin-bottom: 2%;
                            object-fit: cover;
                        }
                        .header{
                            font-size: 1.5rem;
                            margin-bottom: 1%;
                            color: #1c1c1c;
                        }
                        .line{
                            width: 20%;
                            border-bottom: 3px solid #ff3838;
                            margin-top: 1%;
                            margin-bottom: 1%;
                        }
                        .title{
                            margin-top: 1%;
                            margin-bottom: 2%;
                            font-size: 0.9rem;
                            color: #4b4b4b;
                        }
                        .text{
                            font-size: 0.75rem;
                            color: #4b4b4b;
                            text-align: justify;
                        }
                    }
                }
            }
        }
    }
    .testimonialsHeaderStage{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
        .mainHeader{
            font-size: 1.3rem;
            color: #1c1c1c;
            margin-bottom: 1%;
        }
        .line{
            width: 15%;
            border-bottom: 3px solid #ff3838;
            margin-bottom: 1%;
        }
    }
}
@media screen and (max-width:1920px){
    .about{
        .someFactsStage{
            .content{
                .bottom{
                    .content{
                        .someFactsCard{
                            width: 25%;
                            margin: 2%;
                        }
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 15%;
                }
            }
        }
    }
}
@media screen and (max-width:1440px){
    .about{
        .someFactsStage{
            .content{
                .bottom{
                    .content{
                        .someFactsCard{
                            width: 25%;
                            margin: 2%;
                        }
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 15%;
                }
            }
        }
    }
}
@media screen and (max-width:1366px){
    .about{
        .someFactsStage{
            .content{
                .bottom{
                    .content{
                        .someFactsCard{
                            width: 28%;
                            margin: 2%;
                        }
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 15%;
                }
            }
        }
    }
}
@media screen and (max-width:1024px){
    .about{
        .someFactsStage{
            .content{
                .bottom{
                    .content{
                        .someFactsCard{
                            width: 30%;
                            margin: 1%;
                            .header{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 20%;
                }
            }
        }
    }
}
@media screen and (max-width:768px){
    .about{
        .someFactsStage{
            .content{
                .bottom{
                    .content{
                        .someFactsCard{
                            width: 45%;
                            margin: 1%;
                            .header{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
        .ourResultsStage{
            flex-direction: column;
            .left{
                justify-content: center;
                align-items: center;
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                .ourResultsCard{
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 10%;
                    .svg{
                        margin-right: 10%;
                    }
                    .value{
                        margin-right: 10%;
                    }
                    .name{
                        margin-right: 10%;
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 25%;
                }
            }
        }
        .ourTeamStage{
            .content{
                .bottom{
                    .content{
                        .ourTeamCard{
                            width: 45%;
                        }
                    }
                }
            }
        }
        .testimonialsHeaderStage{
            margin-bottom:5%;
        }
    }
}
@media screen and (max-width:600px){
    .about{
        .prefaceStage{
            .content{
                flex-direction: column;
                .left{
                    flex: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 80%;
                    }
                }
                .right{
                    flex: 100%;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5%;
                    .text{
                        text-align: justify;
                    }
                }
            }
        }
        .someFactsStage{
            .content{
                .bottom{
                    .content{
                        .someFactsCard{
                            width: 45%;
                            margin: 1%;
                            .header{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
        .ourResultsStage{
            flex-direction: column;
            .left{
                justify-content: center;
                align-items: center;
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                .ourResultsCard{
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 5%;
                    .svg{
                        margin-right: 5%;
                    }
                    .value{
                        margin-right: 5%;
                    }
                    .name{
                        margin-right: 5%;
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 30%;
                }
            }
        }
        .testimonialsHeaderStage{
            margin-bottom:5%;
        }
    }
}
@media screen and (max-width:414px){
    .about{
        .prefaceStage{
            .content{
                flex-direction: column;
                .left{
                    flex: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 80%;
                    }
                }
                .right{
                    flex: 100%;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5%;
                    text-align: center;
                }
            }
        }
        .someFactsStage{
            .content{
                .top{
                    text-align: center;
                }
                .bottom{
                    .content{
                        .someFactsCard{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                            margin: 1%;
                            .header{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
        .ourResultsStage{
            flex-direction: column;
            .left{
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                .ourResultsCard{
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 10%;
                    .svg{
                        margin-right: 5%;
                    }
                    .value{
                        margin-right: 5%;
                    }
                    .name{
                        margin-right: 5%;
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 50%;
                }
            }
        }
        .ourTeamStage{
            .content{
                .top{
                    text-align: center;
                }
                .bottom{
                    .content{
                        .ourTeamCard{
                            width: 70%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }
        .testimonialsHeaderStage{
            margin-bottom:5%;
        }
    }
}
@media screen and (max-width:375px){
    .about{
        .prefaceStage{
            .content{
                flex-direction: column;
                .left{
                    flex: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 80%;
                    }
                }
                .right{
                    flex: 100%;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5%;
                    text-align: center;
                }
            }
        }
        .someFactsStage{
            .content{
                .top{
                    text-align: center;
                }
                .bottom{
                    .content{
                        .someFactsCard{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                            margin: 1%;
                            .header{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
        .ourResultsStage{
            flex-direction: column;
            .left{
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                .ourResultsCard{
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 10%;
                    .svg{
                        margin-right: 5%;
                    }
                    .value{
                        margin-right: 5%;
                    }
                    .name{
                        margin-right: 5%;
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 50%;
                }
            }
        }
        .ourTeamStage{
            .content{
                .top{
                    text-align: center;
                }
                .bottom{
                    .content{
                        .ourTeamCard{
                            width: 70%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }
        .testimonialsHeaderStage{
            margin-bottom:5%;
        }
    }
}
@media screen and (max-width:320px){
    .about{
        .prefaceStage{
            .content{
                flex-direction: column;
                .left{
                    flex: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 80%;
                    }
                }
                .right{
                    flex: 100%;
                    justify-content: center;
                    align-items: center;
                    margin-top: 5%;
                    text-align: center;
                }
            }
        }
        .someFactsStage{
            .content{
                .top{
                    text-align: center;
                }
                .bottom{
                    .content{
                        .someFactsCard{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                            margin: 1%;
                            .header{
                                font-size: 1.1rem;
                            }
                        }
                    }
                }
            }
        }
        .ourResultsStage{
            flex-direction: column;
            .left{
                justify-content: center;
                align-items: center;
                text-align: center;
            }
            .right{
                display: flex;
                justify-content: center;
                align-items: center;
                .ourResultsCard{
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 10%;
                    .svg{
                        margin-right: 5%;
                    }
                    .value{
                        margin-right: 5%;
                    }
                    .name{
                        margin-right: 5%;
                    }
                }
            }
        }
        .workingWithUsStage{
            .content{
                button{
                    width: 60%;
                }
            }
        }
        .ourTeamStage{
            .content{
                .top{
                    text-align: center;
                }
                .bottom{
                    .content{
                        .ourTeamCard{
                            width: 70%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }
                    }
                }
            }
        }
        .testimonialsHeaderStage{
            margin-bottom:5%;
        }
    }
}
`;