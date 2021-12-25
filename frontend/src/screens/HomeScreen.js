import React, { useState } from 'react';
import MainCarousel from "../components/MainCarousel/MainCarousel"
import homeFilter from '../data/homeFilter';
import { MainLayout, InnerLayout } from '../components/HomeFilter/Layouts';
import Menu from '../components/HomeFilter/Menu';
import Button from '../components/HomeFilter/Button';
import styled from 'styled-components';
import HomeCards from '../components/HomeCards/HomeCards';

const allButtons = ['TÜMÜ', ...new Set(homeFilter.map(item => item.category))]

export default function HomeScreen() {
    const [menuItem, setMenuItems] = useState(homeFilter);
    // eslint-disable-next-line no-unused-vars
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'TÜMÜ'){
            setMenuItems(homeFilter);
            return;
        }

        const filteredData = homeFilter.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <HomeScreenStyled>
            <div className="home">
                <div className="homeCarousel">
                    <MainCarousel/>
                </div>
                <div className="prefaceStage">
                    <div className="left">
                        <div className="firstHeader">HOŞGELDİNİZ</div>
                        <div className="line"/>
                        <div className="secondHeader">40 Yıldır inşaatlarımızı başarıyla ve istikrarla yapıyoruz.</div>
                        <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio. Mauris auctor quis nulla eget viverra. Nulla in elit eu ante hendrerit rhoncus. Nunc pharetra malesuada pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras auctor orci vitae luctus sollicitudin. Curabitur porta rutrum nibh, sed vehicula est facilisis sit amet. Nunc gravida dapibus dui, sed vulputate orci vehicula a. Mauris ut scelerisque neque. Fusce lobortis ante ac lorem laoreet, non imperdiet dolor consequat. Aliquam porttitor aliquam nisl non porta.</div>
                    </div>
                    <div className="right">
                        <img src="https://images.pexels.com/photos/7108780/pexels-photo-7108780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_4"/>
                    </div>
                </div>
                <div className="whatWeDoStage">
                    <div className="firstHeader">NE YAPIYORUZ?</div>
                    <div className="line"/>
                    <div className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet malesuada lectus, a pulvinar odio. Mauris auctor quis nulla eget viverra.</div>
                </div>
                <HomeCards/>
                <div className="infoCardStage">
                    <div className="infoCard">
                        <div className="left"><i class="fas fa-home"></i></div>
                        <div className="right">
                            <div className="top">345</div>
                            <div className="bottom">PROJELER</div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="left"><i class="fas fa-users"></i></div>
                        <div className="right">
                            <div className="top">2478</div>
                            <div className="bottom">MEMNUN MÜŞTERİLER</div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="left"><i class="fas fa-city"></i></div>
                        <div className="right">
                            <div className="top">413</div>
                            <div className="bottom">KALİFİYE MALZEME</div>
                        </div>
                    </div>
                    <div className="infoCard">
                        <div className="left"><i class="fas fa-truck"></i></div>
                        <div className="right">
                            <div className="top">4078</div>
                            <div className="bottom">MAKİNELER</div>
                        </div>
                    </div>
                </div>
                <div>
                    <MainLayout>
                        <InnerLayout>
                            <Button filter={filter} button={button} />
                            <Menu menuItem={menuItem} />
                        </InnerLayout>
                    </MainLayout>
                </div>
            </div>
        </HomeScreenStyled>
    )
}

const HomeScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.home{
    padding-bottom: 2.5rem;
    .prefaceStage{
        display: flex;
        //margin-top: 48.1%;
        margin-top: 53.1%;
        .left{
            flex: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-family: 'Roboto', sans-serif;
            text-align: center;
            margin-left: 5%;
            margin-right: 5%;
            .firstHeader{
                font-size: 1.5rem;
            }
            .line{
                border-bottom: 2px solid #ff3838;
                width: 15%;
                margin-top: 1%;
                margin-bottom: 1%;
            }
            .secondHeader{
                font-size: 1.6rem;
                color: #ff3838;
                margin-bottom: 1%;
                font-weight: bold;
            }
            .paragraph{
                color: #4b4b4b;
                font-size: 0.9rem;
            }
        }
        .right{
            flex:30%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 100%;
                height: 40vh;
                margin-right: 10%;
            }
            img:hover{
                opacity: 1;
            }
        }
    }
    .whatWeDoStage{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Roboto', sans-serif;
        margin-top: 5%;
        .line{
            border-bottom: 2px solid #ff3838;
            width: 10%;
            margin-top: 1%;
            margin-bottom: 1%;
        }
        .firstHeader{
            font-size: 1.5rem;
        }
        .paragraph{
            color: #4b4b4b;
            font-size: 0.9rem;
        }
    }
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
    .infoCardStage{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 5%;
        background-image: url("https://images.unsplash.com/photo-1448301858776-07f780e9c9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .infoCard{
            display: flex;
            width: 20%;
            margin: 0 1%;
            margin-top: 5%;
            margin-bottom: 5%;
            .left{
                flex: 30%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                color: white;
                margin-right: 2%;
            }
            .right{
                flex: 70%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                .top{
                    font-size: 2rem;
                    color: #ff3838;
                }
                .bottom{
                    font-size: 0.8rem;
                    color: white;
                }
            }
        }
    }
}
@media screen and (max-width:1440px){//height:900px
    .home{
        .prefaceStage{
            //margin-top: 64.2%;
            margin-top: 69.2%;
        }
    }
}
@media screen and (max-width:1366px){//height:768px
    .home{
        .prefaceStage{
            //margin-top: 48.9%;
            margin-top: 53.9%;
        }
    }
}
@media screen and (max-width:1280px){//height:720px
    .home{
        .prefaceStage{
            //margin-top: 48.4%;
            margin-top: 53.4%;
        }
    }
}
@media screen and (max-width:1024px){//height:576px
    .home{
        .prefaceStage{
            //margin-top: 46.5%;
            margin-top: 51.5%;
        }
    }
}
@media screen and (max-width:768px){
    .home{
        .prefaceStage{
            //margin-top: 62.7%;
            margin-top: 67.7%;
            flex-direction: column;
            .left{
                flex: 100%;
            }
            .right{
                flex: 100%;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                img{
                    margin-right: 0%;
                    width: 50%;
                }
            }
        }
        .whatWeDoStage{
            margin-left: 3%;
        }
        .homeCardStage{
            .homeCard{
                width: 45%;
            }
        }
        .infoCardStage{
            .infoCard{
                flex-direction: column;
                .left{
                    flex: 100%;
                }
                .right{
                    flex: 100%;
                    align-items: center;
                    .top{
                        font-size: 2rem;
                        color: #ff3838;
                    }
                    .bottom{
                        font-size: 0.8rem;
                        color: white;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:600px){
    .home{
        .prefaceStage{
            //margin-top: 82%;
            margin-top: 87%;
            flex-direction: column;
            .left{
                flex: 100%;
            }
            .right{
                flex: 100%;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                img{
                    margin-right: 0%;
                    width: 50%;
                }
            }
        }
        .whatWeDoStage{
            margin-left: 3%;
        }
        .homeCardStage{
            .homeCard{
                width: 45%;
            }
        }
        .infoCardStage{
            .infoCard{
                flex-direction: column;
                text-align: center;
                .left{
                    flex: 100%;
                }
                .right{
                    flex: 100%;
                    align-items: center;
                    .top{
                        font-size: 2rem;
                        color: #ff3838;
                    }
                    .bottom{
                        font-size: 0.8rem;
                        color: white;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:414px){
    .home{
        .prefaceStage{
            //margin-top: 140%;
            margin-top: 145%;
            flex-direction: column;
            .left{
                flex: 100%;
                .secondHeader{
                    font-size: 1.4rem;
                }
            }
            .right{
                flex: 100%;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                img{
                    margin-right: 0%;
                    width: 60%;
                }
            }
        }
        .whatWeDoStage{
            margin-left: 3%;
        }
        .homeCardStage{
            .homeCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
        .infoCardStage{
            flex-direction: column;
            .infoCard{
                flex-direction: column;
                text-align: center;
                .left{
                    flex: 100%;
                }
                .right{
                    flex: 100%;
                    align-items: center;
                    .top{
                        font-size: 2rem;
                        color: #ff3838;
                    }
                    .bottom{
                        font-size: 0.8rem;
                        color: white;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:375px){
    .home{
        .prefaceStage{
            //margin-top: 152%;
            margin-top: 157%;
            flex-direction: column;
            .left{
                flex: 100%;
                .secondHeader{
                    font-size: 1.4rem;
                }
            }
            .right{
                flex: 100%;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                img{
                    margin-right: 0%;
                    width: 70%;
                }
            }
        }
        .whatWeDoStage{
            margin-left: 3%;
        }
        .homeCardStage{
            .homeCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
        .infoCardStage{
            .infoCard{
                flex-direction: column;
                text-align: center;
                .left{
                    flex: 100%;
                }
                .right{
                    flex: 100%;
                    align-items: center;
                    .top{
                        font-size: 2rem;
                        color: #ff3838;
                    }
                    .bottom{
                        font-size: 0.8rem;
                        color: white;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:320px){
    .home{
        .prefaceStage{
            //margin-top: 152%;
            margin-top: 162%;
            flex-direction: column;
            .left{
                flex: 100%;
                .secondHeader{
                    font-size: 1.4rem;
                }
            }
            .right{
                flex: 100%;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                img{
                    margin-right: 0%;
                    width: 70%;
                }
            }
        }
        .whatWeDoStage{
            margin-left: 3%;
        }
        .homeCardStage{
            .homeCard{
                width: 80%;
                margin: 0%;
                margin-bottom: 5%;
            }
        }
        .infoCardStage{
            .infoCard{
                flex-direction: column;
                text-align: center;
                .left{
                    flex: 100%;
                }
                .right{
                    flex: 100%;
                    align-items: center;
                    .top{
                        font-size: 2rem;
                        color: #ff3838;
                    }
                    .bottom{
                        font-size: 0.8rem;
                        color: white;
                    }
                }
            }
        }
    }
}
`;