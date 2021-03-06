import React from 'react'
import { Link } from 'react-router-dom';
import { LoadScript } from "@react-google-maps/api";
import Map from "../components/Map/Map";
import "../styles/contact/contact.css";
import emailjs from 'emailjs-com';

export default function ContactScreen() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gdw8al5', 'template_m9zd5vt', e.target, 'user_1fRQ5KP751jM7lJm6PMc7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
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
                    <form className="formStage" onSubmit={sendEmail}>
                        <div className="inputStage">
                            <div className="inputName">Adı*</div>
                            <input type="text" placeholder="Lütfen adınızı giriniz" name="name"/>
                        </div>
                        <div className="inputStage">
                            <div className="inputName">Telefon Numarası*</div>
                            <input type="tel" placeholder="Lütfen telefon numaranızı giriniz" name="tel"/>
                        </div>
                        <div className="inputStage">
                            <div className="inputName">Email Adresi*</div>
                            <input type="email" placeholder="Lütfen emailinizi giriniz" name="email"/>
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
    )
}