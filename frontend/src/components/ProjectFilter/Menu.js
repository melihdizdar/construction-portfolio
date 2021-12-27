import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Menu({menuItem}) {
    return (
        <MenuItemStyled >
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt={item.image}/>
                            </div>
                            <div className="titleStage">
                                <h6>{item.location}</h6>
                            </div>
                            <div className="contentStage">
                                <small>{item.text}</small>
                                <Link to={item.link}>Daha Fazla</Link>
                            </div>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width:414px){
        grid-template-columns: repeat(1, 1fr);
        margin-left:10%;
        margin-right:10%;
    }
    .grid-item{
        .portfolio-content{
            font-family: 'Roboto', sans-serif;
            display: block;
            position: relative;
            overflow: hidden;
            .titleStage{
                display:flex;
                justify-content:flex-start;
                align-items:flex-start;
                margin-top: 5%;
                h6{
                    font-size: 1rem;
                }
            }
            .contentStage{
                display:flex;
                justify-content:flex-start;
                align-items:flex-start;
                flex-direction:column;
                small{
                    color:#3E414A;
                    font-size:0.8rem;
                }
                a{
                    color:#ff3838;
                    text-decoration:none;
                    margin-top:2%;
                }
                a:hover{
                    color:#1c1c1c;
                }
            }
            img{
                width: 100%;
                height: 30vh;
                object-fit: cover;
            }
            .portfolio-image{
                &::before{
                    content: "";
                    position: absolute;
                    left: 2%;
                    top: 4%;
                    height: 0;
                    width: 0;
                    transition: all .4s ease-in-out;
                }
            }
            .portfolio-image:hover{
                ul{
                    transform: translateY(0);
                    transform: translate(-50%, -50%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all .4s ease-in-out;
                    opacity: 1;
                    li{
                        transition: all .4s ease-in-out;
                        &:hover{
                            background-color: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                    li:hover{
                        svg{
                            color: var(--white-color);
                        }
                    }
                    svg{
                        font-size: 2rem;
                    }
                }
            }
        }
    }
`;

export default Menu;