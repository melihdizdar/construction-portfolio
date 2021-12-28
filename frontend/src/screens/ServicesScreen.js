import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ServicesCard from '../components/ServicesCards/ServicesCards';
import ServicesTestimonials from '../components/ServicesTestimonials/ServicesTestimonials';
import servicesData from '../data/servicesData';

export default function ServicesScreen() {
    return (
        <ServicesScreenStyled>
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
        </ServicesScreenStyled>
    )
}
const ServicesScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.services{
    padding-bottom: 2.5rem;
    font-family: 'Roboto', sans-serif;
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
        display:flex;
        justift-content:center;
        align-items:center;
        flex-direction:column;
        margin-left:10%;
        margin-right:10%;
        margin-top:2%;
        margin-bottom:2%;
        .firstHeader{
            font-size:1.3rem;
            color:#1c1c1c;
            font-weight:bold;
            margin-bottom:1%;
        }
        .line{
            border-bottom: 3px solid #ff3838;
            width:7.5%;
            margin-bottom:2%;
        }
        .text{
            font-size:0.8rem;
            color:#4b4b4b;
            text-align:center;
        }
    }
    .ServicesCardStage{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 5%;
        .servicesCard{
            width: 30%;
            margin: 1%;
            font-family: 'Roboto', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            img{
                width: 100%;
                height: 300px;
                position:relative;
                filter: brightness(30%);
            }
            img:hover{
                opacity: 1;
            }
            .content{
                position:absolute;
                margin-left: 2%;
                display: block;
                .svg{
                    font-size: 3rem;
                    color: #ff3838;
                }
                .text{
                    font-size: 1.8rem;
                    color: white;
                    font-weight: bold;
                }
                .link{
                    margin-top: 1%;
                    a{
                        color: #ff3838;
                        font-size: 1rem;
                        text-decoration: none;
                    }
                    a:hover{
                        opacity: 0.8;
                    }
                }
            }
        }
    }
    .testimonialsHeaderStage{
        display:flex;
        justift-content:center;
        align-items:center;
        flex-direction:column;
        margin-left:10%;
        margin-right:10%;
        margin-top:5%;
        .firstHeader{
            font-size:1.3rem;
            color:#1c1c1c;
            margin-bottom:1%;
            font-weight:bold;
        }
        .line{
            border-bottom: 3px solid #ff3838;
            width:10%;
            margin-bottom:2%;
        }
    }
}
@media screen and (max-width:1280px){//height:720px
    .services{
        .prefaceStage{
            .line{
                width:10%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:15%;
            }
        }
    }
}
@media screen and (max-width:1024px){//height:576px
    .services{
        .prefaceStage{
            .line{
                width:12.5%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:20%;
            }
        }
    }
}
@media screen and (max-width:768px){
    .services{
        .prefaceStage{
            .line{
                width:17.5%;
            }
        }
        .ServicesCardStage{
            .servicesCard{
                width: 45%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:30%;
            }
        }
    }
}
@media screen and (max-width:600px){
    .services{
        .prefaceStage{
            .line{
                width:22.5%;
            }
        }
        .ServicesCardStage{
            .servicesCard{
                width: 45%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:35%;
            }
        }
    }
}
@media screen and (max-width:414px){
    .services{
        .prefaceStage{
            .line{
                width:35%;
            }
        }
        .ServicesCardStage{
            .servicesCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:55%;
            }
        }
    }
}
@media screen and (max-width:375px){
    .services{
        .prefaceStage{
            .line{
                width:37.5%;
            }
        }
        .ServicesCardStage{
            .servicesCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:57.5%;
            }
        }
    }
}
@media screen and (max-width:320px){
    .services{
        .prefaceStage{
            .line{
                width:40%;
            }
        }
        .ServicesCardStage{
            .servicesCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
        .testimonialsHeaderStage{
            .line{
                width:70%;
            }
        }
    }
}
`;