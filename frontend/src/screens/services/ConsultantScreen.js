import React from 'react'
import { Link } from 'react-router-dom';
import SubServicesScreenStyled from "../../styles/SubServicesScreenStyled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ServicesAccordionItem from '../../components/ServicesAccordion/ServicesAccordionItem';
import ServicesAccordionWrapper from '../../components/ServicesAccordion/ServicesAccordionWrapper';

export default function ConsultantScreen() {
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
        <SubServicesScreenStyled>
            <div className="subServices">
                <div className="headerStage">
                    <div className="content">
                        <div className="left">YAPI DANIŞMAN</div>
                        <div className="right">
                            <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="firstLink"><Link to="/services">SERVİSLER</Link></div>&nbsp;/&nbsp;<div className="secondLink">YAPI DANIŞMAN</div>
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
                        <div className="mainHeader">YAPI DANIŞMAN</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tellus tincidunt, pulvinar nisl non, dictum lectus. Duis et efficitur nisi. Integer auctor purus cursus, consectetur purus et, ullamcorper purus.</div>
                        <div className="imageStage">
                            <img src="https://images.pexels.com/photos/544965/pexels-photo-544965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="image_1"/>
                        </div>
                        <div className="subHeader">Hizmete Genel Bakış</div>
                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tellus tincidunt, pulvinar nisl non, dictum lectus. Duis et efficitur nisi. Integer auctor purus cursus, consectetur purus et, ullamcorper purus. Nulla in vestibulum est. Mauris interdum finibus massa a fringilla. Donec blandit massa et dictum varius. Aenean nisl turpis, tempus pulvinar nisl laoreet, elementum ullamcorper est. Aenean vitae tristique tortor. Suspendisse potenti. Aliquam dictum mattis vulputate. Donec accumsan dictum enim vitae dignissim. Fusce gravida et turpis in luctus.</div>
                        <div className="subServicesCarousel">
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
        </SubServicesScreenStyled>
    )
}