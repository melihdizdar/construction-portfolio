import React, { useState } from 'react';
import MainCarousel from "../components/MainCarousel/MainCarousel"
import "../styles/Home/home.css";
import homeFilter from '../data/homeFilter';
import { MainLayout, InnerLayout } from '../components/HomeFilter/Layouts';
import Menu from '../components/HomeFilter/Menu';
import Button from '../components/HomeFilter/Button';
import { Link } from 'react-router-dom';

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
    )
}
