import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ServicesAccordionItem from '../components/ServicesAccordion/ServicesAccordionItem';
import ServicesAccordionWrapper from '../components/ServicesAccordion/ServicesAccordionWrapper';

export default function EngineeringScreen() {
    const accordionData = [
        {
            "title": "Kat planlarında değişiklik yapabilirmiyim?",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla purus eget enim bibendum vestibulum. Morbi sit amet ultricies nibh. Vivamus quam est, ullamcorper eu interdum quis, malesuada sed magna. Cras nec eros eget orci ornare dignissim. Donec ac turpis quis nisi varius imperdiet in in erat."
        },
        {
            "title": "İnşaat sırasında evimi site üzerinden ziyaret edebilirmiyim?",
            "description": "Donec euismod sollicitudin sollicitudin. Cras consectetur nisi auctor augue gravida imperdiet. Duis efficitur maximus nunc ut porta. Curabitur egestas metus lacus. Nulla viverra orci mi, vel maximus nisl facilisis in. Aliquam blandit rutrum tortor sed lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat porta hendrerit. Nunc vulputate accumsan mollis. Cras eget metus at ex lobortis tempus vitae eget neque."
        },
        {
            "title": "İlk görüşmede yanımda ne getirmem gerekiyor?",
            "description": "Curabitur dapibus dui eu massa gravida, ac luctus lorem tincidunt. Mauris urna lorem, volutpat eget turpis quis, hendrerit rutrum turpis. Pellentesque imperdiet, ipsum rutrum dapibus vehicula, eros nisl porta purus, nec fringilla sapien dolor vitae libero. Proin varius imperdiet est ac facilisis."
        },
    ];
    return (
        <EngineeringScreenStyled>
            <div className="engineering">
                <div className="headerStage">
                    <div className="content">
                        <div className="left">YAPI MÜHENDİSLİĞİ</div>
                        <div className="right">
                            <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="firstLink"><Link to="/services">SERVİSLER</Link></div>&nbsp;/&nbsp;<div className="secondLink">YAPI MÜHENDİSLİĞİ</div>
                        </div>
                    </div>
                </div>
                <div className="contentStage">
                    <div className="left">
                        <Link to="/counselor">
                            <div className="contentCard"> 
                                <div className="svg">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div className="text">YAPI DANIŞMAN</div>
                            </div>
                        </Link>
                        <Link to="/renovation">
                            <div className="contentCard">
                                <div className="svg">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div className="text">EV YENİLEME</div>
                            </div>
                        </Link>
                        <Link to="/building">
                        <div className="contentCard">
                            <div className="svg">
                                <i class="fas fa-building"></i>
                            </div>
                            <div className="text">MİMARİ BİNA YAPIMI</div>
                        </div>
                        </Link>
                        <Link to="/interior">                       
                            <div className="contentCard">
                                    <div className="svg">
                                        <i class="fas fa-ruler-combined"></i>
                                    </div>
                                    <div className="text">İÇ MEKAN TASARIM</div>
                            </div>
                        </Link>
                        <Link to="/engineering">
                            <div className="contentCard">
                                <div className="svg">
                                    <i class="fas fa-hard-hat"></i>
                                </div>
                                <div className="text">YAPI MÜHENDİSLİĞİ</div>
                            </div>
                        </Link>
                        <Link to="/planning">
                            <div className="contentCard">
                                    <div className="svg">
                                        <i class="fas fa-pencil-ruler"></i>
                                    </div>
                                    <div className="text">ÖN İNŞAAT PLANLAMA</div>
                            </div>
                        </Link>
                    </div>
                    <div className="right">
                        <div className="mainHeader">YAPI MÜHENDİSLİĞİ</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tellus tincidunt, pulvinar nisl non, dictum lectus. Duis et efficitur nisi. Integer auctor purus cursus, consectetur purus et, ullamcorper purus.</div>
                        <div className="imageStage">
                            <img src="https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_1"/>
                        </div>
                        <div className="subHeader">Hizmete Genel Bakış</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tellus tincidunt, pulvinar nisl non, dictum lectus. Duis et efficitur nisi. Integer auctor purus cursus, consectetur purus et, ullamcorper purus. Nulla in vestibulum est. Mauris interdum finibus massa a fringilla. Donec blandit massa et dictum varius. Aenean nisl turpis, tempus pulvinar nisl laoreet, elementum ullamcorper est. Aenean vitae tristique tortor. Suspendisse potenti. Aliquam dictum mattis vulputate. Donec accumsan dictum enim vitae dignissim. Fusce gravida et turpis in luctus.</div>
                        <div className="engineeringCarousel">
                            <Carousel
                                showArrows={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                                autoPlay={true}
                                interval={6000}
                                showIndicators={false}
                                emulateTouch
                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                    hasPrev && (
                                        <button type="button" onClick={onClickHandler} title={label} className="leftarrow">
                                            <i class="fas fa-angle-left"></i>
                                        </button>
                                    )
                                }
                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                    hasNext && (
                                        <button type="button" onClick={onClickHandler} title={label} className="rightarrow">
                                            <i class="fas fa-angle-right"></i>
                                        </button>
                                    )
                                }>
                                <div>
                                    <img src="https://images.pexels.com/photos/2489/street-building-construction-industry.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="slider_1"/>
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="slider_2"/>
                                </div>
                                <div>
                                    <img src="https://images.pexels.com/photos/544971/pexels-photo-544971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="slider_3"/>
                                </div>
                            </Carousel>
                        </div>
                        <div className="subHeader">Proje Detayları</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tellus tincidunt, pulvinar nisl non, dictum lectus. Duis et efficitur nisi. Integer auctor purus cursus, consectetur purus et, ullamcorper purus. Nulla in vestibulum est. Mauris interdum finibus massa a fringilla. Donec blandit massa et dictum varius. Aenean nisl turpis, tempus pulvinar nisl laoreet, elementum ullamcorper est. Aenean vitae tristique tortor. Suspendisse potenti. Aliquam dictum mattis vulputate. Donec accumsan dictum enim vitae dignissim. Fusce gravida et turpis in luctus.</div>
                        <div className="subHeader">İşleyişimiz</div>
                        <div className="processStage">
                            <div className="processCard">
                                <div className="left">
                                    <div className="circle"/>
                                    <div className="svg"><i class="fas fa-dumpster"></i></div>
                                </div>
                                <div className="right">
                                    <div className="header">TASARIM PROJESİ</div>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla risus id diam pretium dictum. Duis malesuada, metus sit amet ullamcorper finibus.</div>
                                </div>
                            </div>
                            <div className="processCard">
                                <div className="left">
                                    <div className="circle"/>
                                    <div className="svg"><i class="fas fa-wallet"></i></div>
                                </div>
                                <div className="right">
                                    <div className="header">BÜTÇE ONAYI</div>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla risus id diam pretium dictum. Duis malesuada, metus sit amet ullamcorper finibus.</div>
                                </div>
                            </div>
                            <div className="processCard">
                                <div className="left">
                                    <div className="circle"/>
                                    <div className="svg"><i class="fas fa-toolbox"></i></div>
                                </div>
                                <div className="right">
                                    <div className="header">İNŞAAT & RENOVASYON</div>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla risus id diam pretium dictum. Duis malesuada, metus sit amet ullamcorper finibus.</div>
                                </div>
                            </div>
                            <div className="processCard">
                                <div className="left">
                                    <div className="circle"/>
                                    <div className="svg"><i class="fas fa-paint-roller"></i></div>
                                </div>
                                <div className="right">
                                    <div className="header">TESLİM ET</div>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla risus id diam pretium dictum. Duis malesuada, metus sit amet ullamcorper finibus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="subHeader">Popüler Sorular</div>
                        <div className="accordionStage">
                            <div className="description">
                                <ServicesAccordionWrapper>
                                {accordionData.map((item, index) => (
                                    <ServicesAccordionItem key={index} index={index} title={item.title} description={item.description} />
                                ))}
                                </ServicesAccordionWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EngineeringScreenStyled>
    )
}
const EngineeringScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.engineering{
    padding-bottom: 2.5rem;
    font-family: 'Roboto', sans-serif;
    .headerStage{
        width: 100%;
        margin-bottom:3%;
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
    .contentStage{
        display:flex;
        .left{
            flex:30%;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            flex-direction:column;
            a{
                width:85%;
                text-decoration:none;
                .contentCard{
                    width:90%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border: 0.2px solid #d1ccc0;
                    height:10vh;
                    margin-bottom:3%;
                    .svg{
                        flex:30%;
                        font-size:2rem;
                        color:#4b4b4b;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .text{
                        flex:70%;
                        font-size:1.2rem;
                        color:#4b4b4b;
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                    }
                }
            }
            .contentCard:hover{
                background-color:#3d3d3d;
                .svg{
                    color:white;
                }
                .text{
                    color:#ff3838;
                }
            }
        }
        .right{
            flex:70%;
            .mainHeader{
                font-size:2.4rem;
                font-weight:bold;
                margin-top:-2%;
                margin-bottom:2%;
            }
            .text{
                font-size:1.2rem;
                margin-bottom:2%;
                color:#4b4b4b;
            }
            .imageStage{
                display:flex;
                justify-content:flex-start;
                align-items:flex-start;
                margin-right:2%;
                img{
                    width:100%;
                    height:75vh;
                    object-fit:cover;
                }
            }
            .subHeader{
                font-size:1.7rem;
                font-weight:bold;
                margin-bottom:2%;
                margin-top:2%;
            }
            .engineeringCarousel{
                margin-right:2%;
                .carousel{
                    width:100%;
                    height:70vh;
                    img{
                        width:100%;
                    }
                }
                .leftarrow{
                    position: absolute;
                    z-index: 2;
                    top: 45%;
                    width: 30;
                    height: 30;
                    cursor: pointer;
                    left: 15px;
                    border: none;
                    background: #1c1c1c;
                    font-size: 2rem;
                    color: white;
                }
                .leftarrow:hover{
                    opacity: 0.8;
                }
                .rightarrow{
                    position: absolute;
                    z-index: 2;
                    top: 45%;
                    width: 30;
                    height: 30;
                    cursor: pointer;
                    right: 15px;
                    border: none;
                    background: #1c1c1c;
                    font-size: 2rem;
                    color: white;
                }
                .rightarrow:hover{
                    opacity: 0.8;
                }
            }
            .processStage{
                display:flex;
                justify-content:center;
                align-items:center;
                flex-wrap:wrap;
                margin-right:4%;
                .processCard{
                    width:45%;
                    margin:1%;
                    display:flex;
                    align-items:center;
                    .left{
                        flex:30%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        .circle{
                            width:60px;
                            height:60px;
                            background:#ff3838;
                            clip-path: circle(50% at 50% 50%);
                            position:relative;
                        }
                        .svg{
                            color:white;
                            position:absolute;
                            font-size:1.5rem;
                        }
                    }
                    .right{
                        flex:70%;
                        display:flex;
                        justify-content:flex-start;
                        align-items:flex-start;
                        flex-direction:column;
                        .header{
                            font-size:1.1rem;
                            color:#1c1c1c;
                        }
                        .text{
                            font-size:0.7rem;
                            color:#4b4b4b;
                        }
                    }
                }
            }
            .accordionStage{
                display:flex;
                justify-content:center;
                align-items:center;
                margin-right:3%;
                font-family: 'Roboto', sans-serif;
                .accordion-wrapper .accordion-item h3.accordion-title {
                    font-size: 1.75rem;
                    margin: 0;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button {
                    position: relative;
                    display: flex;
                    align-items: center;
                    background: #1c1c1c;
                    border-radius: 1rem;
                    border: none;
                    font-size: 1.2rem;
                    width: 100%;
                    text-align: left;
                    color: white;
                    font-weight: bold;
                    margin-top: 0.5rem;
                    padding: 1rem;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button.active {
                    background-color: #ff3838;
                    color: white;
                    border: #ff3838 solid 1px;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button:hover {
                    background-color: #ff3838;
                    color: white;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.title-wrapper {
                    display: block;
                    position: relative;
                    width: 100%;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper {
                    width: 10%;
                    display: flex;
                    justify-content: center;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper span.minus {
                    width: 24px;
                    height: 24px;
                }
                .accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper span.plus {
                    width: 24px;
                    height: 24px;
                    transform: rotate(90deg);
                    transition-timing-function: ease-in;
                    transition: all 1s;
                }
                .accordion-wrapper .accordion-item .accordion-panel .panel-close { 
                    background: #e0e0e0;
                    box-sizing: border-box;
                    padding: 0.5rem 1rem 0 1rem;
                    opacity:0;
                    width:100%;
                    height:0;
                    overflow: hidden;
                    transition-timing-function: ease-out;
                    transition: all 1s;
                }
                .accordion-wrapper .accordion-item .accordion-panel .panel-open {
                    overflow: hidden;
                    background: #e0e0e0;
                    padding: 1rem;
                    margin-bottom: 1rem;
                    box-sizing: border-box;
                    border-radius: 1rem;
                    opacity:1;
                    width:100%;
                    height: auto;
                    transition-timing-function: ease-in;
                    transition: all 1s;
                }
                .accordion-wrapper .accordion-item .accordion-panel p {
                    margin: 0;
                }
                .accordion-wrapper{
                    margin-bottom: 10%;
                }
            }
        }
    }
}
@media screen and (min-width: 1024px){
    .engineering{
        .contentStage{
            .right{
                .engineeringCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 40%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 40%;
                        right: 15px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:768px){
    .engineering{
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .engineeringCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:600px){
    .engineering{
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .engineeringCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:414px){
    .engineering{
        .headerStage{
            width: 100%;
            margin-bottom:3%;
            .content{
                justify-content: center;
                align-items: center;
                flex-wrap:wrap;
                .left{
                    margin-left: 0%;
                }
                .right{
                    font-size:0.8rem;
                }
            }
        }
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .mainHeader{
                    font-size:1.6rem;
                }
                .subHeader{
                    font-size:1.4rem;
                }
                .text{
                    font-size:0.9rem;
                }
                .engineeringCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
                .processStage{
                    .processCard{
                        width:90%;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:375px){
    .engineering{
        .headerStage{
            width: 100%;
            margin-bottom:3%;
            .content{
                justify-content: center;
                align-items: center;
                flex-wrap:wrap;
                .left{
                    margin-left: 0%;
                }
            }
        }
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .engineeringCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
                .processStage{
                    .processCard{
                        width:90%;
                    }
                }
            }
        }
    }
}
@media screen and (max-width:320px){
    .engineering{
        .headerStage{
            width: 100%;
            margin-bottom:3%;
            .content{
                justify-content: center;
                align-items: center;
                flex-wrap:wrap;
                .left{
                    margin-left: 0%;
                }
            }
        }
        .contentStage{
            flex-direction:column;
            .left{
                flex:100%;
                margin-bottom:5%;
                a{
                    .contentCard{
                        width:100%;
                    }
                }
            }
            .right{
                .engineeringCarousel{
                    margin-right:2%;
                    .carousel{
                        width:100%;
                        height:40vh;
                        img{
                            width:100%;
                        }
                    }
                    .leftarrow{
                        top: 45%;
                        left: 15px;
                    }
                    .leftarrow:hover{
                    }
                    .rightarrow{
                        top: 45%;
                        right: 15px;
                    }
                }
                .processStage{
                    .processCard{
                        width:90%;
                    }
                }
            }
        }
    }
}
`;