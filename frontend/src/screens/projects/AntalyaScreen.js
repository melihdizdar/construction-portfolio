import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import SubProjectsScreenStyled from "../../styles/SubProjectsScreenStyled";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import projectImages from "../../data/imagesData"

export default function AntalyaScreen() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <SubProjectsScreenStyled>
            <div className="subProjects">
                <div className="headerStage">
                    <div className="content">
                        <div className="left">ANTALYA, TÜRKİYE</div>
                        <div className="right">
                            <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="firstLink"><Link to="/projects">PROJELER</Link></div>&nbsp;/&nbsp;<div className="secondLink">ANTALYA, TÜRKİYE</div>
                        </div>
                    </div>
                </div>
                <div className="descriptionSplitStage">
                    <div className="left">
                        <div className="content">
                            <div className="header">Açıklama</div>
                            <div className="line"/>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus varius metus. Integer viverra velit id leo semper, sit amet accumsan elit imperdiet. Praesent nec faucibus velit. Fusce scelerisque tortor at urna varius pharetra. Aliquam quis purus eu arcu pellentesque cursus at vel ex. Ut egestas turpis tortor, ac scelerisque diam elementum non.</div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="header">Proje Detayları</div>
                        <div className="line"/>
                        <div className="content">
                            <div className="subHeader">Proje Durumu:</div>
                            <div className="subText">Devam Ediyor</div>
                        </div>
                        <div className="content">
                            <div className="subHeader">Konum:</div>
                            <div className="subText">İstanbul,Türkiye</div>
                        </div>
                    </div>
                </div>
                <div className="imageGalleryHeaderStage">
                    <div className="header">Projenin Resimleri</div>
                    <div className="line"/>
                </div>
                <div className="imageGallery">
                    <Gallery photos={projectImages} direction={"column"} onClick={openLightbox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                            currentIndex={currentImage}
                            views={projectImages.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                            />
                        </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
        </SubProjectsScreenStyled>
    )
}