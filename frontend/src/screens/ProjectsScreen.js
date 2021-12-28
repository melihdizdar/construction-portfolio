import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
        <ProjectsScreenStyled>
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
        </ProjectsScreenStyled>
    )
}
const ProjectsScreenStyled = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.projects{
    padding-bottom: 2.5rem;
    font-family: 'Roboto', sans-serif;
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
}
`;