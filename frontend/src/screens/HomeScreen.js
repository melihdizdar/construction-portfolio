import React, { useState } from 'react';
import MainCarousel from "../components/MainCarousel/MainCarousel"
import projectsData from '../data/projectsData';
import { MainLayout, InnerLayout } from '../components/ProjectFilter/Layouts';
import Menu from '../components/ProjectFilter/Menu';
import Button from '../components/ProjectFilter/Button';
import "../styles/home/home.css";
import HomeCards from '../components/HomeCards/HomeCards';
import servicesData from '../data/servicesData';

const allButtons = ['TÜMÜ', ...new Set(projectsData.map(item => item.category))]

export default function HomeScreen() {
    const [menuItem, setMenuItems] = useState(projectsData);
    // eslint-disable-next-line no-unused-vars
    const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'TÜMÜ'){
            setMenuItems(projectsData);
            return;
        }

        const filteredData = projectsData.filter(item => item.category === button);
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
                {servicesData.map((homeCard) => (
                    <HomeCards key={homeCard._id} homeCard={homeCard}></HomeCards>
                ))}
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
                        <div className="scroll-bg">
                            <div className="scroll-div">
                                <div className="scroll-object">
                                    <Menu menuItem={menuItem} />
                                </div>
                            </div>
                        </div>
                    </InnerLayout>
                </MainLayout>
            </div>
        </div>
    )
}