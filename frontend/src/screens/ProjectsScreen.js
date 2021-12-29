import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/projects/projects.css";
import Button from '../components/ProjectFilter/Button';
import { InnerLayout, MainLayout } from '../components/ProjectFilter/Layouts';
import Menu from '../components/ProjectFilter/Menu';
import projectsData from '../data/projectsData';

const allButtons = ['TÜMÜ', ...new Set(projectsData.map(item => item.category))]

export default function ProjectsScreen() {
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
        <div className="projects">
            <div className="headerStage">
                <div className="content">
                    <div className="left">PROJELER</div>
                    <div className="right">
                        <div className="firstLink"><Link to="/">ANASAYFA</Link></div>&nbsp;/&nbsp;<div className="secondLink">PROJELER</div>
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
        </div>
    )
}