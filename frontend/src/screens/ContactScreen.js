import React from 'react'
import { Link } from 'react-router-dom';
import { LoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import styled from 'styled-components';

export default function ContactScreen() {
    return (
        <ContactScreenStyled>
            <div className="contact">
                <div className="headerStage">
                    <div className="content">
                        <div className="left">İLETİŞİM</div>
                        <div className="right">
                            <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="secondLink">İLETİŞİM</div>
                        </div>
                    </div>
                </div>
                <LoadScript
                    id="script-loader"
                    googleMapsApiKey={"AIzaSyBX1z5nvjcjzyxSMT-QCVS3ERu6Y3iNSb0"}
                    language="tr"
                    region="TR"
                    version="weekly">
                    <Map />
                </LoadScript>
                <div className="contactInfoStage">
                    <div className="left">
                        <div className="firstHeader">GERİ BİLDİRİM FORMU</div>
                        <div className="line"/>
                        <div className="formInfo">
                        Ücretsiz danışmanlık istiyorsanız, lütfen formu doldurarak başlayın:
                        </div>
                        <form className="formStage">
                            <div className="inputStage">
                                <div className="inputName">Adı*</div>
                                <input type="text" placeholder="Lütfen adınızı giriniz" />
                            </div>
                            <div className="inputStage">
                                <div className="inputName">Telefon Numarası*</div>
                                <input type="tel" placeholder="Lütfen telefon numaranızı giriniz" />
                            </div>
                            <div className="inputStage">
                                <div className="inputName">Email Adresi*</div>
                                <input type="email" placeholder="Lütfen adınızı giriniz" />
                            </div>
                            <div className="inputStage">
                                <div className="inputName">Servisinizi seçiniz*</div>
                                <input list="services" name="services" placeholder="Lütfen bir servis seçiniz"/>
                                <datalist id="services">
                                    <option value="YAPI DANIŞMAN"/>
                                    <option value="EV YENİLEME"/>
                                    <option value="MİMARİ BİNA YAPIMI"/>
                                    <option value="İÇ MEKAN TASARIM"/>
                                    <option value="YAPI MÜHENDİSLİĞİ"/>
                                    <option value="ÖN İNŞAAT PLANLAMA"/>
                                </datalist>
                            </div>
                            <div className="textareaStage">
                            <div className="textareaName">Mesaj*</div>
                                <textarea name="message" placeholder="Lütfen mesajınızı giriniz." cols={6}></textarea>
                            </div>
                            <div className="buttonStage">
                                <button type="submit">Talep Gönder</button>
                            </div>
                        </form>
                    </div>
                    <div className="right">
                        <div className="firstHeader">İLETİŞİM BİLGİLERİ</div>
                        <div className="line"/>
                        <div className="cardStage">
                            <div className="contactCard">
                                <div className="left"><i class="fas fa-map-marker-alt"></i></div>
                                <div className="right">
                                    <div className="top">Şirketimizi ziyaret edin</div>
                                    <div className="bottom">34160 Marmara Caddesi, Turkey</div>
                                </div>
                            </div>
                            <div className="contactCard">
                                <div className="left"><i class="fas fa-mobile-alt"></i></div>
                                <div className="right">
                                    <div className="top">Sorunuz mu var? Bizi arayın!</div>
                                    <div className="bottom">+90-123-4567890</div>
                                </div>
                            </div>
                            <div className="contactCard">
                                <div className="left"><i class="far fa-clock"></i></div>
                                <div className="right">
                                    <div className="top">Çalışma Saatleri</div>
                                    <div className="bottom">Pzt–Cmt: 08:00–18:00</div>
                                </div>
                            </div>
                            <div className="contactCard">
                                <div className="left"><i class="far fa-envelope"></i></div>
                                <div className="right">
                                    <div className="top">Bizimle iletişime geç</div>
                                    <div className="bottom"><a href="mailto:info@company.com">info@company.com</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContactScreenStyled>
    )
}

const ContactScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.contact{
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
    .contactInfoStage{
        display: flex;
        font-family: 'Roboto', sans-serif;
        .left{
            flex: 70%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin-left: 5%;
            .firstHeader{
                font-size: 1.3rem;
                color: #1c1c1c;
            }
            .line{
                border-bottom: 3px solid #ff3838;
                width: 60%;
            }
            .formInfo{
                margin-top: 2%;
                margin-bottom: 5%;
                font-size: 1rem;
                color: #4b4b4b;
            }
            .formStage{
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 5%;
                .inputStage{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 45%;
                    margin: 1%;
                    .inputName{
                        font-size: 1rem;
                        color: #1c1c1c;
                    }
                    input{
                        border: 0.1px solid #d1ccc0;
                        width: 100%;
                        height: 5vh;
                    }
                    input:hover{
                        border: 1px solid #4b4b4b;
                    }
                }
                .textareaStage{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 100%;
                    margin: 1%;
                    .textareaName{
                        font-size: 1rem;
                        color: #1c1c1c;
                    }
                    textarea{
                        width: 94%;
                        resize: none;
                        border: 0.1px solid #d1ccc0;
                        margin-bottom: 5%;
                    }
                    textarea:hover{
                        border: 1px solid #1c1c1c;
                    }
                }
                .buttonStage{
                    display: flex;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                    margin-left: 1%;
                    button{
                        background-color: #ff3838;
                        color: white;
                        width: 20%;
                        border: none;
                        height: 6vh;
                    }
                    button:hover{
                        background-color: #1c1c1c;
                    }
                }
            }
        }
        .right{
            flex: 30%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            margin-right: 5%;
            .firstHeader{
                font-size: 1.3rem;
                color: #1c1c1c;
            }
            .line{
                border-bottom: 3px solid #ff3838;
                width: 80%;
            }
            .cardStage{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 70%;
                .contactCard{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 10%;
                    margin-top: 10%;
                    .left{
                        flex: 20%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1.5rem;
                        color: #ff3838;
                    }
                    .right{
                        flex: 80%;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        margin-left: 5%;
                        .top{
                            font-size: 1.1rem;
                            color: #1c1c1c;
                        }
                        .bottom{
                            font-size: 0.9rem;
                            color: #ff3838;
                            a{
                                color: #ff3838;
                                text-decoration: none;
                            }
                            a:hover{
                                opacity: 0.8;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width:1024px){//height:576px
    .contact{
        .contactInfoStage{
            .left{
                flex: 100%;
                .line{
                    width: 80%;
                }
                .formStage{
                    .buttonStage{
                        button{
                            width: 30%;
                        }
                    }
                }
            }
            .right{
                flex: 100%;
                .line{
                    width: 80%;
                }
            }
        }
    }
}
@media screen and (max-width:768px){
    .contact{
        .contactInfoStage{
            .left{
                flex: 100%;
                .line{
                    width: 80%;
                }
                .formStage{
                    .buttonStage{
                        button{
                            width: 35%;
                        }
                    }
                }
            }
            .right{
                flex: 100%;
                .line{
                    width: 80%;
                }
            }
        }
    }
}
@media screen and (max-width:600px){
    .contact{
        .contactInfoStage{
            flex-direction: column;
            .left{
                flex: 100%;
                margin-bottom: 5%;
                margin-left: 0%;
                .line{
                    width: 100%;
                }
                .formStage{
                    margin-left: 5%;
                    .buttonStage{
                        button{
                            width: 25%;
                        }
                    }
                }
            }
            .right{
                flex: 100%;
                margin-right: 0%;
                .line{
                    width: 100%;
                }
                .cardStage{
                    margin-left: 15%;
                }
            }
        }
    }
}
@media screen and (max-width:414px){
    .contact{
        .contactInfoStage{
            flex-direction: column-reverse;
            .left{
                flex: 100%;
                margin-bottom: 5%;
                margin-left: 0%;
                .formInfo{
                    text-align: center;
                }
                .line{
                    width: 100%;
                }
                .formStage{
                    margin-left: 5%;
                    .buttonStage{
                        width: 100%;
                        button{
                            width: 35%;
                        }
                    }
                }
            }
            .right{
                flex: 100%;
                margin-right: 0%;
                margin-bottom: 5%;
                .line{
                    width: 100%;
                }
                .cardStage{
                    margin-left: 5%;
                }
            }
        }
    }
}
@media screen and (max-width:375px){
    .contact{
        .contactInfoStage{
            flex-direction: column-reverse;
            .left{
                flex: 100%;
                margin-bottom: 5%;
                margin-left: 0%;
                .formInfo{
                    text-align: center;
                }
                .line{
                    width: 100%;
                }
                .formStage{
                    margin-left: 5%;
                    .buttonStage{
                        width: 100%;
                        button{
                            width: 35%;
                        }
                    }
                }
            }
            .right{
                flex: 100%;
                margin-right: 0%;
                margin-bottom: 5%;
                .line{
                    width: 100%;
                }
                .cardStage{
                    margin-left: 5%;
                }
            }
        }
    }
}
@media screen and (max-width:320px){
    .contact{
        .contactInfoStage{
            flex-direction: column-reverse;
            .left{
                flex: 100%;
                margin-bottom: 5%;
                margin-left: 0%;
                .formInfo{
                    text-align: center;
                }
                .line{
                    width: 100%;
                }
                .formStage{
                    margin-left: 5%;
                    flex-direction: column;
                    .inputStage{
                        width: 100%;
                        margin-bottom: 10%;
                    }
                    .textareaStage{
                        margin-bottom: 10%;
                        textarea{
                            width: 100%;
                        }
                    }
                    .buttonStage{
                        button{
                            width: 70%;
                        }
                    }
                }
            }
            .right{
                flex: 100%;
                margin-right: 0%;
                margin-bottom: 5%;
                .line{
                    width: 100%;
                }
                .cardStage{
                    margin-left: 5%;
                }
            }
        }
    }
}
`;