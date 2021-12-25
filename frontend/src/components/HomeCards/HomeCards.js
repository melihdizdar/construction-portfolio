import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

export default function HomeCards() {
    return (
        <HomeCardStyled>
            <div className="homeCardStage">
                <div className="homeCard">
                    <img src="https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="homeCard_1" />
                    <div className="content">
                        <div className="svg"><i class="fas fa-user"></i></div>
                        <div className="text">YAPI<br/>DANIŞMAN</div>
                    </div>
                    <div className="content2">
                        <div className="header">YAPI<br/>DANIŞMAN</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio.</div>
                        <div className="link"><Link to="/">Daha Fazla</Link></div>
                    </div>
                </div>
                <div className="homeCard">
                    <img src="https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="homeCard_2" />
                    <div className="content">
                        <div className="svg"><i class="fas fa-home"></i></div>
                        <div className="text">EV<br/>YENİLEME</div>
                    </div>
                    <div className="content2">
                        <div className="header">EV<br/>YENİLEME</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio.</div>
                        <div className="link"><Link to="/">Daha Fazla</Link></div>
                    </div>
                </div>
                <div className="homeCard">
                    <img src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="homeCard_3" />
                    <div className="content">
                        <div className="svg"><i class="fas fa-building"></i></div>
                        <div className="text">MİMARİ<br/>BİNA YAPIMI</div>
                    </div>
                    <div className="content2">
                        <div className="header">MİMARİ<br/>BİNA YAPIMI</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio.</div>
                        <div className="link"><Link to="/">Daha Fazla</Link></div>
                    </div>
                </div>
                <div className="homeCard">
                    <img src="https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="homeCard_4" />
                    <div className="content">
                        <div className="svg"><i class="fas fa-ruler-combined"></i></div>
                        <div className="text">İÇ MEKAN<br/>TASARIM</div>
                    </div>
                    <div className="content2">
                        <div className="header">İÇ MEKAN<br/>TASARIM</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio.</div>
                        <div className="link"><Link to="/">Daha Fazla</Link></div>
                    </div>
                </div>
                <div className="homeCard">
                    <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="homeCard_5" />
                    <div className="content">
                        <div className="svg"><i class="fas fa-hard-hat"></i></div>
                        <div className="text">YAPI<br/>MÜHENDİSLİĞİ</div>
                    </div>
                    <div className="content2">
                        <div className="header">YAPI<br/>MÜHENDİSLİĞİ</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio.</div>
                        <div className="link"><Link to="/">Daha Fazla</Link></div>
                    </div>
                </div>
                <div className="homeCard">
                    <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="homeCard_6" />
                    <div className="content">
                        <div className="svg"><i class="fas fa-pencil-ruler"></i></div>
                        <div className="text">ÖN İNŞAAT<br/>PLANLAMA</div>
                    </div>
                    <div className="content2">
                        <div className="header">ÖN İNŞAAT<br/>PLANLAMA</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio.</div>
                        <div className="link"><Link to="/">Daha Fazla</Link></div>
                    </div>
                </div>
            </div>
        </HomeCardStyled>
    )
}
const HomeCardStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.home{
    .homeCardStage{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 5%;
        .homeCard{
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
            }
            .content2{
                position:absolute;
                margin-left: 2%;
                display: none;
                cursor: default;
                .header{
                    font-size: 1.5rem;
                    color: white;
                    font-weight: bold;
                }
                .paragraph{
                    color: white;
                    font-size: 0.8rem;
                    margin-top: 1%;
                    margin-right: 50%;
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
        .homeCard:hover{
            transition: all 0.5s ease;
            .content{
                display: none;
            }
            .content2{
                display: block;
            }
        }
    }
}
@media screen and (max-width:768px){
    .home{
        .homeCardStage{
            .homeCard{
                width: 45%;
            }
        }
    }
}
@media screen and (max-width:600px){
    .home{
        .homeCardStage{
            .homeCard{
                width: 45%;
            }
        }
    }
}
@media screen and (max-width:414px){
    .home{
        .homeCardStage{
            .homeCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
    }
}
@media screen and (max-width:375px){
    .home{
        .homeCardStage{
            .homeCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
    }
}
@media screen and (max-width:320px){
    .home{
        .homeCardStage{
            .homeCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
    }
}
`;